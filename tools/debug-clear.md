# debug-clear

Clear the debug log file.

## Parameters
None.

## Implementation
```bash
node "${CLAUDE_DEBUG_PLUGIN_ROOT}/scripts/capture-logs.js" --clear
```

## Returns
JSON with `status: "cleared"`.

Use this between test runs to start with a clean log. The server keeps running.
