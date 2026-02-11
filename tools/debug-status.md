# debug-status

Check if the debug server is active.

## Parameters
None.

## Implementation
```bash
node "${CLAUDE_DEBUG_PLUGIN_ROOT}/scripts/capture-logs.js" --status
```

## Returns
JSON with `active`, `port`, `endpoint`, and `logCount` when running. Returns `{ "active": false }` when not running.
