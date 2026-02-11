# debug-read

Read captured debug logs.

## Parameters
- `tail` (optional): Show only the last N entries.

## Implementation
```bash
node scripts/capture-logs.js --read [--tail=N]
```

## Returns
Plain text log entries in the format:
```
[2026-02-10T15:30:45.123Z] descriptive-label | {"key":"value"}
```

Analyze the captured data to trace execution flow, find unexpected values, and identify where errors occur.
