---
"claude-debug-mode": major
---

# Simplify plugin to match opencode-debug (v3.0.0)

Complete rewrite to align with [opencode-debug](https://github.com/MrgSub/opencode-debug)'s simple, effective approach. Same 5 tools, same fetch()-based workflow, dramatically less code.

## Breaking Changes

- Endpoint changed from `/log` to `/debug`
- Log format changed from JSONL to plain text: `[timestamp] label | data`
- Single fixed log file `.debug-logs/debug.log` replaces session-based files
- No more cleanup levels (`--cleanup=full|minimal|none`) — just `--stop`
- Removed `--filter`, `--since`, `--mode` parameters
- Removed `/debug` command — use `/investigate` instead

## What Changed

- **`scripts/capture-logs.js`**: Rewritten from 551 to ~175 lines. Cross-platform port detection via `net.createServer` (replaces macOS-only `lsof`). No dependencies on other scripts.
- **`agents/debug-agent.md`**: Replaced 8-phase rigid methodology with simple 8-step workflow (~60 lines, down from ~170).
- **`commands/investigate.md`**: Simplified from ~246 lines to ~35 lines.
- **All 5 tool definitions**: Each reduced to ~15 lines.

## Removed

- `scripts/detect-runtime.js` — runtime detection unnecessary
- `scripts/track-instrumentation.js` — automatic cleanup tracking removed
- `scripts/inject-instrumentation.js` — snippet template lives in agent output
- `scripts/hook-block-skills.js`, `scripts/hook-detect-debug.js` — no hooks needed
- `hooks/` directory
- `skills/` directory
- `docs/` directory (user-guide, troubleshooting, examples)
- `MARKETPLACE_SUBMISSION.md`
