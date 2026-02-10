# /debug

Activate debug mode to systematically diagnose and fix bugs.

## Usage

```
/debug <bug description>
```

## Description

Debug mode implements a structured debugging workflow inspired by Cursor IDE:

1. **Hypothesis Generation** - Analyze the codebase and generate 5-7 possible sources of the bug
2. **Narrowing** - Distill to the 1-2 most likely causes based on the bug description
3. **Log Instrumentation** - Automatically inject strategic logging statements
4. **Reproduction** - Guide user to reproduce the bug and collect logs
5. **Analysis** - Deep analysis of captured logs and execution flow
6. **Fix Proposal** - Propose a minimal, targeted fix
7. **Verification** - Confirm the fix works
8. **Cleanup** - Remove all injected debug logging

## Examples

```
/debug "API returns 500 error when creating user with duplicate email"
/debug "React component not re-rendering after state update"
/debug "Database query times out intermittently"
```

## Behavior

When invoked, this command delegates to the `debug-agent` which will:
- Search the codebase for relevant code
- Form hypotheses about the bug
- Add logging to track execution and data flow
- Ask you to reproduce the bug
- Analyze the logs to pinpoint the issue
- Propose and implement a fix
- Clean up debug logs after verification

---

**Agent:** debug-agent
