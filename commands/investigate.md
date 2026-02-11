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
3. Ask the user to reproduce the bug, then type "done"

### Phase 3 — Analyze & Decide

1. Run `debug-read` and check each hypothesis against the log evidence
2. **Decision point:**
   - **Root cause clear** — one hypothesis validated with traceable evidence → go to Phase 4
   - **Inconclusive** — unexpected data, missing info, or multiple viable hypotheses remain → refine hypotheses, add/move fetch() calls, and **loop back to Phase 2**

### Phase 4 — Fix & Verify

1. Implement a minimal fix based on the validated hypothesis
2. Ask the user to verify the bug is gone
3. **If still broken** → loop back to Phase 1 with new information

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
