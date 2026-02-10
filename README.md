# Claude Debug Mode Plugin

A Claude Code plugin that brings Cursor-like debug mode capabilities to the Claude CLI.

## Features

- **Hypothesis Generation**: Automatically generates 5-7 possible bug sources
- **Smart Narrowing**: Distills to the most likely causes
- **Auto-Logging**: Injects strategic debug logging statements
- **Log Analysis**: Analyzes captured logs to pinpoint issues
- **Targeted Fixes**: Proposes minimal, focused fixes
- **Automatic Cleanup**: Removes all debug code after verification

## Installation

### Option 1: Install from directory

```bash
claude plugin add /path/to/claude-debug-plugin
```

### Option 2: Install from GitHub

```bash
claude plugin add github:yourusername/claude-debug-plugin
```

## Usage

Activate debug mode with the `/debug` command followed by a bug description:

```
/debug "API returns 500 error when creating user with duplicate email"
```

### Debug Workflow

The plugin follows a systematic 8-phase debugging workflow:

1. **Hypothesis Generation** - Analyzes codebase and generates possible bug sources
2. **Narrowing** - Identifies the most likely causes
3. **Log Instrumentation** - Adds strategic `[DEBUG-MODE]` logging
4. **Reproduction** - Guides you to reproduce and capture logs
5. **Analysis** - Deep analysis of logs and execution flow
6. **Fix Proposal** - Proposes a minimal, targeted fix
7. **Verification** - Confirms the fix works
8. **Cleanup** - Removes all debug logging

### Example Session

```
You: /debug "React component not re-rendering after state update"

Debug Agent: 🔍 Analyzing bug...

Possible sources:
1. State mutation instead of new object creation
2. Missing dependency in useEffect
3. Incorrect key prop causing reconciliation issues
4. State update batching behavior
5. Stale closure capturing old state
6. Conditional rendering logic error
7. Parent component preventing re-render

📍 Most likely causes:
1. State mutation (HIGH) - Common React anti-pattern
2. Stale closure (MEDIUM) - Often occurs with callbacks

Adding debug logging to track state changes...

[Logs added to component]

📋 Please reproduce the bug:
1. Trigger the state update
2. Check if component re-renders
3. Paste the console output here
```

## Plugin Structure

```
claude-debug-plugin/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata
├── commands/
│   └── debug.md             # /debug slash command
├── agents/
│   └── debug-agent.md       # Specialized debug agent
├── skills/
│   └── debug-workflow.md    # Debug methodology
└── README.md
```

## Log Format

All debug logs use a consistent format for easy identification and cleanup:

```
[DEBUG-MODE] <location> | <event> | <data>
```

Examples:
```
[DEBUG-MODE] userController.create | ENTRY | { email: "test@example.com" }
[DEBUG-MODE] userController.create | DB_QUERY | Inserting user
[DEBUG-MODE] userController.create | ERROR | SequelizeUniqueConstraintError
```

## Supported Languages

The debug agent adapts logging syntax for your project's language:

- JavaScript/TypeScript
- Python
- Go
- Rust
- Java
- Ruby
- And more...

## Tips

- **Be Specific**: Provide detailed bug descriptions for better hypothesis generation
- **Include Context**: Mention when the bug occurs, what you expected, and what happened
- **Share Logs**: Copy full console/server output for accurate analysis
- **Verify Thoroughly**: Test edge cases before confirming the fix

## Contributing

Contributions welcome! Please submit issues and pull requests.

## License

MIT
