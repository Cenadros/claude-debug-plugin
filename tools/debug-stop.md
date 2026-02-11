# debug-stop

Stop the debug capture server.

## Parameters
None.

## Implementation
```bash
node scripts/capture-logs.js --stop
```

## Returns
JSON with `status: "stopped"` or `status: "not_running"`.

Stops the server and removes all debug files (logs and state). Remember to remove the fetch() calls you inserted in the codebase.
