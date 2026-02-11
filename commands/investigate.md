# /investigate

You are now in **Debug Mode**. Follow this hypothesis-driven workflow to diagnose the issue.

## Workflow

### Phase 1 — Understand & Hypothesize

1. Analyze the bug from the user's description
2. Explore the relevant code paths
3. Form **2-4 specific, testable hypotheses** ranked by likelihood

Each hypothesis should name a concrete cause (e.g. "the auth token expires before the refresh fires") not a vague area (e.g. "something wrong with auth").

### Phase 2 — Instrument & Capture

1. Run `debug-start` to begin capturing
2. Insert fetch() calls **targeted at validating or invalidating your hypotheses** — each call should map to a specific hypothesis
3. Use AskUserQuestion to prompt the user:
   - header: "Reproduce"
   - question: "I've inserted instrumentation. Please reproduce the bug now, then select an option below."
   - options:
     - "Bug reproduced" — "I triggered the bug and it behaved as expected"
     - "Cannot reproduce" — "I followed the steps but the bug did not occur"
     - "Different behavior" — "Something happened, but not the original bug"
   - If **Bug reproduced** → proceed to Phase 3
   - If **Cannot reproduce** → check `debug-status` for captured data, discuss reproduction steps, loop back with broader instrumentation
   - If **Different behavior** → read logs, re-evaluate hypotheses with the new information

### Phase 3 — Analyze & Decide

1. Run `debug-read` and check each hypothesis against the log evidence
2. **Decision point:**
   - **Root cause clear** — one hypothesis validated with traceable evidence → go to Phase 4
   - **Inconclusive** — unexpected data, missing info, or multiple viable hypotheses remain → refine hypotheses, add/move fetch() calls, and **loop back to Phase 2**

3. Present your findings and use AskUserQuestion to confirm direction:
   - header: "Next Step"
   - question: "I've analyzed the logs. Here's what I found: [summary]. How would you like to proceed?"
   - options:
     - "Implement fix" — "The root cause looks correct — go ahead and fix it"
     - "Need more data" — "Add more instrumentation and capture another round"
     - "Rethink hypotheses" — "The analysis doesn't match what I'm seeing — go back to Phase 1"
   - If **Implement fix** → proceed to Phase 4
   - If **Need more data** → `debug-clear`, loop back to Phase 2 with refined instrumentation
   - If **Rethink hypotheses** → loop back to Phase 1

### Phase 4 — Fix & Verify

1. Implement a minimal fix based on the validated hypothesis
2. Use AskUserQuestion to verify the fix:
   - header: "Verify Fix"
   - question: "I've implemented a fix. Please test it and let me know the result."
   - options:
     - "Bug is fixed" — "The original issue no longer occurs"
     - "Still broken" — "The same bug still happens"
     - "Partially fixed" — "Improved but not fully resolved, or a new issue appeared"
   - If **Bug is fixed** → proceed to Phase 5 (cleanup)
   - If **Still broken** → `debug-clear`, loop back to Phase 1 with new information
   - If **Partially fixed** → ask follow-up about what changed, then decide: refine fix or loop back to Phase 1

### Phase 5 — Cleanup

1. Remove all fetch() calls from the code
2. Run `debug-stop`

## Fetch Call Template

```javascript
fetch("http://localhost:PORT/debug", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ label: "descriptive-label", data: { key: value } })
}).catch(() => {});
```

## Important

- Do not propose fixes before reading log evidence
- Always remove fetch() calls after debugging is complete
- The debug server script path is relative to the plugin directory
