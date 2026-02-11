---
"claude-debug-plugin": minor
---

Replace free-text interactions with structured AskUserQuestion prompts

All user interaction points now present structured options instead of asking users to type "done" or respond with free text:

- **Phase 2 (Reproduce):** Options for "Bug reproduced", "Cannot reproduce", or "Different behavior"
- **Phase 3 (Next Step):** New interaction point — options for "Implement fix", "Need more data", or "Rethink hypotheses"
- **Phase 4 (Verify Fix):** Options for "Bug is fixed", "Still broken", or "Partially fixed"
