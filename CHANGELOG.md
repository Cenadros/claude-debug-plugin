# claude-debug-plugin

## 1.0.1

### Patch Changes

- [#8](https://github.com/Cenadros/claude-debug-plugin/pull/8) [`36883a7`](https://github.com/Cenadros/claude-debug-plugin/commit/36883a7598791ff0e12ccb9207c90b0be09fbeef) Thanks [@Cenadros](https://github.com/Cenadros)! - Fix invalid marketplace source format in README installation instruct

## 1.0.0

### Major Changes

- [#2](https://github.com/Cenadros/claude-debug-plugin/pull/2) [`ec7c530`](https://github.com/Cenadros/claude-debug-plugin/commit/ec7c530c9825c746b5681b9cf95f3bb75f1a1ac9) Thanks [@Cenadros](https://github.com/Cenadros)! - # Simplify plugin to match opencode-debug (v3.0.0)

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

- [#2](https://github.com/Cenadros/claude-debug-plugin/pull/2) [`ed83864`](https://github.com/Cenadros/claude-debug-plugin/commit/ed838642aa87da3c2c9a3ee145aa40abc61eaad3) Thanks [@Cenadros](https://github.com/Cenadros)! - First version of the plugin

### Minor Changes

- [#3](https://github.com/Cenadros/claude-debug-plugin/pull/3) [`0c824e0`](https://github.com/Cenadros/claude-debug-plugin/commit/0c824e0269b5a128ecba1c4e5382754f4a10e592) Thanks [@Cenadros](https://github.com/Cenadros)! - Replace free-text interactions with structured AskUserQuestion prompts

  All user interaction points now present structured options instead of asking users to type "done" or respond with free text:

  - **Phase 2 (Reproduce):** Options for "Bug reproduced", "Cannot reproduce", or "Different behavior"
  - **Phase 3 (Next Step):** New interaction point — options for "Implement fix", "Need more data", or "Rethink hypotheses"
  - **Phase 4 (Verify Fix):** Options for "Bug is fixed", "Still broken", or "Partially fixed"

### Patch Changes

- [#7](https://github.com/Cenadros/claude-debug-plugin/pull/7) [`60f4235`](https://github.com/Cenadros/claude-debug-plugin/commit/60f4235fc4c2e70b35eb508ded08df828973f566) Thanks [@Cenadros](https://github.com/Cenadros)! - Add marketplace installation to README and set version to 1.0.0

  - Add marketplace install steps using `/plugin marketplace add` and `/plugin install`
  - Keep GitHub install (`/plugin add github:Cenadros/claude-debug-plugin`) as an alternative
  - Set version to 1.0.0 in plugin.json and marketplace.json
