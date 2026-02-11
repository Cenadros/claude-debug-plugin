# debug-start

Start the debug capture server.

## Parameters
- `port` (optional): Port number (default: 3737). Auto-selects if busy.

## Implementation
```bash
node scripts/capture-logs.js --start [--port=PORT]
```

## Returns
JSON with `status`, `port`, `endpoint`.

When started, instrument code with fetch calls:
```javascript
fetch("http://localhost:PORT/debug", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ label: "descriptive-label", data: { key: value } })
}).catch(() => {});
```
