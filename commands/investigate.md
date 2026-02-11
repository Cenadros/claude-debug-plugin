# /investigate

You are now in **Debug Mode**. Follow this workflow to diagnose the issue.

## Workflow

1. **Analyze the issue** — Understand the bug from the user's description and explore the relevant code
2. **Start the debug server** — Run `debug-start` to begin capturing
3. **Instrument the code** — Insert fetch() calls at strategic locations (function entry/exit, async operations, catch blocks, state changes)
4. **Reproduce** — Ask the user to trigger the bug, then type "done"
5. **Read and analyze logs** — Run `debug-read` and trace the execution flow to find the root cause
6. **Fix** — Propose a minimal fix based on log evidence
7. **Clean up** — Remove all fetch() calls from the code and run `debug-stop`

## Fetch Call Template

```javascript
fetch("http://localhost:PORT/debug", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ label: "descriptive-label", data: { key: value } })
}).catch(() => {});
```

Use descriptive labels: `"user-login-start"`, `"api-response"`, `"error-caught"`, `"state-before-update"`.

Place calls at function entry/exit, before/after async operations, inside catch blocks, and at state changes.

## Important

- Do not propose fixes before reading log evidence
- Always remove fetch() calls after debugging is complete
- The debug server script path is relative to the plugin directory
