#!/usr/bin/env node

/**
 * Debug Log Capture Server
 *
 * HTTP server that receives POST requests with labeled debug data.
 * Logs are written as plain text to a temp directory.
 *
 * Commands:
 *   --start [--port=3737]  Start the HTTP server
 *   --stop                 Stop the server
 *   --read [--tail=N]      Read captured logs
 *   --status               Check server status
 *   --clear                Clear the log file
 */

const http = require('http');
const net = require('net');
const fs = require('fs');
const os = require('os');
const path = require('path');

const DEFAULT_PORT = 3737;
const LOG_DIR = path.join(os.tmpdir(), 'claude-debug-mode');
const LOG_FILE = path.join(LOG_DIR, 'debug.log');
const STATE_FILE = path.join(LOG_DIR, 'server-state.json');

// --- Helpers ---

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function saveState(state) {
  ensureLogDir();
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return null;
  }
}

function clearState() {
  try { fs.unlinkSync(STATE_FILE); } catch {}
}

function cleanupAll() {
  try { fs.unlinkSync(LOG_FILE); } catch {}
  clearState();
  try { fs.rmdirSync(LOG_DIR); } catch {}
}

function findAvailablePort(preferred) {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.listen(preferred, '127.0.0.1', () => {
      srv.close(() => resolve(preferred));
    });
    srv.on('error', () => {
      // preferred port busy — let OS pick one
      const srv2 = net.createServer();
      srv2.listen(0, '127.0.0.1', () => {
        const port = srv2.address().port;
        srv2.close(() => resolve(port));
      });
      srv2.on('error', reject);
    });
  });
}

function appendLog(label, data) {
  ensureLogDir();
  const timestamp = new Date().toISOString();
  const line = data !== undefined
    ? `[${timestamp}] ${label} | ${JSON.stringify(data)}\n`
    : `[${timestamp}] ${label}\n`;
  fs.appendFileSync(LOG_FILE, line);
}

// --- Commands ---

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function startServer(port) {
  ensureLogDir();

  const existing = loadState();
  if (existing && existing.active) {
    console.log(JSON.stringify({
      status: 'already_running',
      port: existing.port,
      endpoint: existing.endpoint,
    }));
    return;
  }

  const availablePort = await findAvailablePort(port);

  const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, CORS_HEADERS);
      res.end();
      return;
    }

    if (req.url === '/health' && req.method === 'GET') {
      res.writeHead(200, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    if (req.url === '/debug' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk.toString(); });
      req.on('end', () => {
        try {
          const { label, data } = JSON.parse(body);
          if (!label) {
            res.writeHead(400, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing required field: label' }));
            return;
          }
          appendLog(label, data);
          res.writeHead(200, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ received: true }));
        } catch {
          res.writeHead(400, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    res.writeHead(404, { ...CORS_HEADERS, 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  });

  server.on('error', (err) => {
    console.error(JSON.stringify({ status: 'error', message: err.message }));
    process.exit(1);
  });

  server.listen(availablePort, 'localhost', () => {
    const state = {
      active: true,
      port: availablePort,
      endpoint: `http://localhost:${availablePort}/debug`,
      pid: process.pid,
      startTime: new Date().toISOString(),
    };
    saveState(state);
    console.log(JSON.stringify({ status: 'started', ...state }));
  });

  const shutdown = () => { server.close(() => { cleanupAll(); process.exit(0); }); };
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

async function stopServer() {
  const state = loadState();
  if (!state || !state.active) {
    console.log(JSON.stringify({ status: 'not_running' }));
    return;
  }

  try { process.kill(state.pid, 'SIGTERM'); } catch {}
  cleanupAll();
  console.log(JSON.stringify({ status: 'stopped' }));
}

function readLogs(tail) {
  if (!fs.existsSync(LOG_FILE)) {
    console.log('No debug logs captured yet.');
    return;
  }

  let lines = fs.readFileSync(LOG_FILE, 'utf8').trim().split('\n').filter(Boolean);

  if (tail) {
    lines = lines.slice(-tail);
  }

  console.log(`Debug log (${lines.length} entries):\n`);
  lines.forEach(line => console.log(line));
}

function getStatus() {
  const state = loadState();
  if (!state || !state.active) {
    console.log(JSON.stringify({ active: false }));
    return;
  }

  let logCount = 0;
  if (fs.existsSync(LOG_FILE)) {
    logCount = fs.readFileSync(LOG_FILE, 'utf8').trim().split('\n').filter(Boolean).length;
  }

  console.log(JSON.stringify({
    active: true,
    port: state.port,
    endpoint: state.endpoint,
    logCount,
  }));
}

function clearLogs() {
  if (fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, '');
  }
  console.log(JSON.stringify({ status: 'cleared' }));
}

// --- CLI ---

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = { command: null, port: DEFAULT_PORT, tail: null };
  for (const arg of args) {
    if (arg === '--start') parsed.command = 'start';
    else if (arg === '--stop') parsed.command = 'stop';
    else if (arg === '--read') parsed.command = 'read';
    else if (arg === '--status') parsed.command = 'status';
    else if (arg === '--clear') parsed.command = 'clear';
    else if (arg.startsWith('--port=')) parsed.port = parseInt(arg.split('=')[1], 10);
    else if (arg.startsWith('--tail=')) parsed.tail = parseInt(arg.split('=')[1], 10);
  }
  return parsed;
}

async function main() {
  const args = parseArgs();

  if (!args.command) {
    console.error('Usage: node capture-logs.js --start|--stop|--read|--status|--clear');
    process.exit(1);
  }

  switch (args.command) {
    case 'start': await startServer(args.port); break;
    case 'stop': await stopServer(); break;
    case 'read': readLogs(args.tail); break;
    case 'status': getStatus(); break;
    case 'clear': clearLogs(); break;
  }
}

main().catch(err => {
  console.error(JSON.stringify({ status: 'error', message: err.message }));
  process.exit(1);
});
