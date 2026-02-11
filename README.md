# Claude Debug Mode

A debug plugin for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) that captures runtime data from instrumented code. The agent inserts `fetch()` calls at strategic locations, captures the data via a local HTTP server, and analyzes the logs to diagnose issues.

Inspired by [opencode-debug](https://github.com/MrgSub/opencode-debug).

## How It Works

1. **Hypothesize** — Agent analyzes the bug, explores the code, and forms 2-4 ranked hypotheses
2. **Instrument** — Agent starts a local HTTP server and inserts targeted `fetch()` calls to test each hypothesis
3. **Reproduce** — You trigger the bug while the server captures runtime data, then select an outcome (reproduced, can't reproduce, or different behavior)
4. **Analyze** — Agent checks each hypothesis against the log evidence and presents findings. You choose: implement fix, gather more data, or rethink hypotheses
5. **Fix & Verify** — Agent implements a minimal fix. You confirm the result: fixed, still broken, or partially fixed
6. **Clean up** — Agent removes the debug fetch calls and stops the server

## Installation

### From the Marketplace

Add the marketplace and install the plugin:

```
/plugin marketplace add github:Cenadros/claude-debug-plugin
/plugin install claude-debug-mode@cenadros-plugins
```

### From GitHub

```
/plugin add github:Cenadros/claude-debug-plugin
```

## Tools

| Tool           | Description                              |
| -------------- | ---------------------------------------- |
| `debug-start`  | Start the debug capture server           |
| `debug-stop`   | Stop the server (logs are preserved)     |
| `debug-read`   | Read and analyze captured debug data     |
| `debug-clear`  | Clear the log file for a fresh session   |
| `debug-status` | Check if debug mode is active            |

## Usage

Start a debugging session with the `/investigate` command:

```
/investigate "API returns 500 when creating user with duplicate email"
```

The agent will form hypotheses, instrument your code to test them, and ask you to reproduce the issue. After analyzing the logs, it either refines its hypotheses and loops back, or proposes a fix and asks you to verify.

### Fetch Call Template

The agent inserts calls like this:

```javascript
fetch("http://localhost:3737/debug", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ label: "descriptive-label", data: { key: value } })
}).catch(() => {});
```

### Log Format

Logs are plain text:

```
[2026-02-10T15:30:45.123Z] user-login-start | {"userId":123}
[2026-02-10T15:30:45.456Z] api-response | {"status":200}
[2026-02-10T15:30:45.789Z] error-caught | {"error":"Duplicate email"}
```

## License

MIT
