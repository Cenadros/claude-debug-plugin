---
"claude-debug-mode": major
---

# Simplify to match opencode-debug (v3.0.0)

Strip plugin down to match opencode-debug's simplicity. Same 5 tools, same fetch()-based approach.

## Changes

- Rewrite `scripts/capture-logs.js` (~150 lines, down from 551)
- Endpoint changed from `/log` to `/debug`
- Log format changed from JSONL to plain text: `[timestamp] label | data`
- Fixed log file at `.debug-logs/debug.log` (no more sessions/archives)
- Cross-platform port detection via `net.createServer`
- Remove `detect-runtime.js`, `track-instrumentation.js`, `inject-instrumentation.js`
- Remove hooks, skills, and docs directories
- Simplify agent from 8-phase methodology to simple workflow
- Simplify all 5 tool definitions
- Simplify `/investigate` command
