# Debug Workflow Skill

Systematic debugging methodology for diagnosing and fixing software bugs.

## Core Principles

### 1. Hypothesize Before Acting
Never jump to conclusions. Always generate multiple hypotheses before investigating.

### 2. Narrow Before Diving Deep
Rank hypotheses by likelihood. Focus investigation on the most probable causes first.

### 3. Observe Before Fixing
Add instrumentation to observe actual behavior. Don't fix based on assumptions.

### 4. Verify Before Closing
Always verify fixes work. Bugs often have subtle edge cases.

### 5. Clean Up After Yourself
Remove all debug code. Debug logs in production are technical debt.

## Hypothesis Generation Framework

When analyzing a bug, consider these categories:

### Input/Validation Issues
- Invalid input not being caught
- Type coercion problems
- Missing null/undefined checks
- Encoding/decoding errors

### State Management Issues
- Race conditions
- Stale state
- Memory leaks
- Incorrect initialization

### External Dependencies
- API contract changes
- Network timeouts
- Database constraints
- File system permissions

### Logic Errors
- Off-by-one errors
- Incorrect conditionals
- Missing edge cases
- Incorrect operator precedence

### Configuration Issues
- Environment variables
- Feature flags
- Missing configuration
- Environment-specific behavior

### Concurrency Issues
- Deadlocks
- Race conditions
- Thread safety
- Async/await errors

## Strategic Log Placement

### Entry Points
Log at function/method entry with all parameters:
```
[DEBUG-MODE] functionName | ENTRY | { param1, param2 }
```

### Decision Points
Log at conditionals and branches:
```
[DEBUG-MODE] functionName | BRANCH | condition=true, taking path A
```

### External Calls
Log before and after external operations:
```
[DEBUG-MODE] functionName | API_CALL_START | { endpoint, payload }
[DEBUG-MODE] functionName | API_CALL_END | { status, response }
```

### Error Boundaries
Log in catch blocks with full error details:
```
[DEBUG-MODE] functionName | ERROR | { name, message, stack }
```

### Exit Points
Log at function return with result:
```
[DEBUG-MODE] functionName | EXIT | { result, duration }
```

## Log Analysis Patterns

### Timeline Reconstruction
1. Sort logs by timestamp
2. Identify the sequence of events
3. Find where expected flow diverges from actual

### Data Flow Tracing
1. Track a piece of data through the system
2. Note transformations at each step
3. Identify where data becomes corrupted

### Error Propagation
1. Find the first error occurrence
2. Trace how it propagates
3. Identify where handling fails

## Common Bug Patterns

### The Silent Failure
**Symptom**: Operation appears to succeed but has no effect
**Investigation**: Add logging to verify operation actually executes
**Common Causes**: Early returns, swallowed exceptions, no-op conditions

### The Race Condition
**Symptom**: Bug occurs intermittently, timing-dependent
**Investigation**: Add timestamps, log thread/process IDs
**Common Causes**: Shared mutable state, missing locks, async ordering

### The Type Mismatch
**Symptom**: Unexpected behavior with certain inputs
**Investigation**: Log types alongside values
**Common Causes**: Implicit coercion, serialization issues, null vs undefined

### The Configuration Drift
**Symptom**: Works in one environment, fails in another
**Investigation**: Log configuration values at startup
**Common Causes**: Missing env vars, different defaults, cached config

### The N+1 Problem
**Symptom**: Performance degrades with data size
**Investigation**: Log query counts and timing
**Common Causes**: Loops making individual queries, missing eager loading

## Minimal Fix Philosophy

When proposing fixes:

1. **Fix the Bug, Not the World**
   - Address the specific issue
   - Don't refactor unrelated code
   - Don't add features

2. **Preserve Behavior**
   - Fix should only change buggy behavior
   - All other behavior should remain identical
   - Add tests for the fixed case

3. **Consider Edge Cases**
   - Does the fix handle related edge cases?
   - Could the fix introduce new bugs?
   - Is error handling complete?

4. **Document the Fix**
   - Add a comment if the fix isn't obvious
   - Update relevant documentation
   - Note in commit message

## Verification Checklist

Before considering a bug fixed:

- [ ] Original reproduction steps no longer trigger the bug
- [ ] Related edge cases are tested
- [ ] No regression in other functionality
- [ ] Debug logging is completely removed
- [ ] Code changes are minimal and focused
- [ ] Fix is documented appropriately
