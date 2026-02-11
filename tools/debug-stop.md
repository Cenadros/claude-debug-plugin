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

The log file is preserved at `.debug-logs/debug.log`. Remember to remove the fetch() calls you inserted in the codebase.
