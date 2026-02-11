# Claude Debug Mode

A debug plugin for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) that captures runtime data from instrumented code. The agent inserts `fetch()` calls at strategic locations, captures the data via a local HTTP server, and analyzes the logs to diagnose issues.

Inspired by [opencode-debug](https://github.com/MrgSub/opencode-debug).

## How It Works

1. **Start debug server** — Local HTTP server begins listening for debug events
2. **Instrument code** — Agent inserts `fetch()` calls at key locations in your codebase
3. **Reproduce the issue** — You run your code and trigger the bug
4. **Analyze logs** — Agent reads the captured data to identify the problem
5. **Clean up** — Agent removes the debug fetch calls and stops the server

## Installation

```bash
claude plugin add github:Cenadros/claude-debug-plugin
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

The agent will start the debug server, instrument your code, and ask you to reproduce the issue. After you trigger the bug and type "done", the agent reads the logs and proposes a fix.

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
