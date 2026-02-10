---
description: Generate RAG pipeline with L1 orchestrator + L2 specialists
options:
  - label: "Full Pipeline"
    description: "L1 + multiple L2 agents"
  - label: "Single Domain"
    description: "L1 + one L2 specialist"
---

# RAG Pipeline Generator

Create a complete Retrieval-Augmented Generation pipeline with agent hierarchy.

## Pipeline Structure

```
L1 Orchestrator
├── L2 Research Specialist
├── L2 Implementation Specialist
├── L2 Testing Specialist
└── L2 Documentation Specialist
```

## Generated Artifacts

- L1 orchestrator agent definition
- L2 specialist agent definitions
- Routing logic for task delegation
- Context management configuration

## Instructions

When invoked:
1. Ask for pipeline purpose/domain
2. Determine needed specialists
3. Generate L1 orchestrator with routing rules
4. Generate L2 specialists with domain expertise
5. Create coordination hooks if needed
6. Generate invocation command
