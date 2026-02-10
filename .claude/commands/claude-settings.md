---
description: Configure Claude CLI permissions and modes
options:
  - label: "Permission Mode"
    description: "Set allow/deny rules"
  - label: "Agent-Only Mode"
    description: "Configure agent launcher"
  - label: "View Current"
    description: "Show active settings"
---

# Claude Settings Manager

Configure permissions, modes, and behaviors for Claude Code CLI.

## Settings Categories

### Permissions
- Tool allow/deny lists
- File access patterns
- Network restrictions

### Modes
- Agent-only mode (restrict to specific agents)
- Auto-approve patterns
- Silent mode

## Settings Files

- `.claude/settings.json` - Project settings (committed)
- `.claude/settings.local.json` - Local overrides (gitignored)

## Instructions

When invoked:
1. Read current settings from both files
2. Show current configuration
3. Allow modifications through interactive prompts
4. Write changes to appropriate file
