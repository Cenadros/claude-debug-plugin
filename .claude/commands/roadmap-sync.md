---
description: Sync roadmaps with GitHub Project Board
options:
  - label: "Import Roadmap"
    description: "Create issues from ROADMAP.json"
  - label: "Sync Progress"
    description: "Update GitHub from local progress"
  - label: "Pull Status"
    description: "Fetch status from GitHub"
---

# Roadmap Integration

Bridge local roadmap files with GitHub Project Board for bidirectional sync.

## Workflow

1. Create roadmap with `/create-roadmap` or manually
2. Import projects as GitHub issues
3. Track progress locally
4. Sync changes to GitHub

## File Format

Roadmaps are stored as JSON:
```json
{
  "title": "Project Roadmap",
  "projects": [
    {
      "name": "Feature X",
      "status": "in_progress",
      "github_issue": 123
    }
  ]
}
```

## Instructions

When invoked:
1. Check for ROADMAP.json in .claude/docs/
2. Verify GitHub authentication and project access
3. Perform selected sync operation
4. Report changes made
