---
description: Interactive project menu - Quick access to all commands, agents, skills, and tools
---

# claude-debug-plugin - Interactive Menu

**DISPLAY INSTRUCTION:** You MUST display this ENTIRE menu verbatim in a code block. Do NOT summarize. Do NOT paraphrase. Show the FULL ASCII menu below.

```
╔═══════════════════════════════════════════════════════════════╗
║  claude-debug-plugin                                            ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  QUICK KEYS (type single character):                          ║
║  ─────────────────────────────────────────────────────────    ║
║  [1] TOP TASK    - Start #1 from Project Board                ║
║  [2] NEXT TASK   - Pick next task                             ║
║  [3] COMMIT      - git status + staged commit                 ║
║  [4] BOARD       - /github-project-menu                       ║
║  [5] ROADMAP     - /create-roadmap or /roadmap-status         ║
║  [M] DEPLOY      - /deploy-full (frontend + backend)          ║
║  [O] E2E TESTS   - /e2e-test                                  ║
║  [T] TASK LIST   - /create-task-list                          ║
║  [A] AUDIT       - /claude-audit                              ║
║  [X] SETTINGS    - Configuration options                      ║
║                                                               ║
║  COMMANDS BY CATEGORY:                                        ║
║  ─────────────────────────────────────────────────────────    ║
║  Planning:    /phase-dev-plan  /create-roadmap  /roadmap-status║
║  GitHub:      /github-task-start  /github-project-menu        ║
║  Testing:     /e2e-test  /ralph  /create-smoke-test           ║
║  Refactor:    /refactor-workflow  /refactor-analyze           ║
║  Deploy:      /deploy-full                                    ║
║  Claude:      /create-agent  /create-hook  /create-skill      ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

Type a key (1-5, M, O, T, A, X) or a command name, or describe what you need.

---

## Quick Access Keys

Reply with a **single character** for quick navigation:

| Key | Action | Description |
|-----|--------|-------------|
| **1** | TOP TASK | Start #1 from Project Board |
| **2** | NEXT TASK | Pick next task |
| **3** | Commit | git status + staged commit |
| **4** | GitHub Board | /github-project-menu |
| **5** | Roadmap | /create-roadmap or /roadmap-status |
| **M** | Deploy | /deploy-full |
| **O** | E2E Tests | /e2e-test |
| **T** | Task List | /create-task-list |
| **A** | Claude Audit | /claude-audit |
| **X** | Settings | /claude-settings |

## All Commands

| Command | Category | Description |
|---------|----------|-------------|
| `/menu` | Navigation | Interactive ASCII menu for project commands and tools |
| `/menu-happy` | Navigation | Mobile-optimized menu for Happy CLI (40-char width) |
| `/ccasp-setup` | Claude Code | CCASP Setup Wizard - vibe-code friendly project configuration |
| `/update-check` | Maintenance | Check for CCASP updates and add new features to your project |
| `/ccasp-panel` | Navigation | Launch control panel in new terminal (agents, skills, hooks, MCP) |
| `/e2e-test` | Testing | Run E2E tests with Playwright (ralph loop, headed, watch modes) |
| `/ralph` | Testing | Ralph Loop - Continuous test-fix cycle until all tests pass |
| `/refactor-workflow` | Refactoring | Guided refactoring workflow with branch, task list, and GitHub issue |
| `/refactor-analyze` | Refactoring | Deep complexity analysis for refactoring prioritization |
| `/golden-master` | Refactoring | Generate characterization tests before refactoring |
| `/github-task` | GitHub | Create GitHub issues with codebase analysis |
| `/github-menu-issues-list` | GitHub | Mobile-friendly menu of open GitHub issues |
| `/create-task-list-for-issue` | GitHub | Start working on a GitHub issue by number |
| `/phase-dev-plan` | Planning | Create phased development plans (95%+ success rate) |
| `/create-agent` | Claude Code | Create L1/L2/L3 agents for Claude Code |
| `/create-hook` | Claude Code | Create enforcement hooks (PreToolUse, PostToolUse, UserPromptSubmit) |
| `/create-skill` | Claude Code | Create RAG-enhanced skill packages |
| `/explore-mcp` | MCP | Discover and install MCP servers based on tech stack |
| `/claude-audit` | Claude Code | Audit CLAUDE.md and .claude/ against best practices |
| `/detect-tech-stack` | Analysis | Re-run tech stack detection and update configuration |
| `/generate-agents` | Claude Code | Generate stack-specific agents from detected tech stack |
| `/project-explorer` | Scaffolding | Interactive scaffolding wizard for fresh projects |
| `/init-ccasp-new-project` | Setup | Initialize CCASP Full preset on empty folder (for Happy users) |
| `/roadmap-sync` | GitHub | Sync roadmaps with GitHub Project Board |
| `/claude-settings` | Claude Code | Configure Claude CLI permissions and modes |
| `/codebase-explorer` | Analysis | Analyze codebase structure and find relevant files |
| `/rag-pipeline` | Claude Code | Generate RAG pipeline with L1 orchestrator + L2 specialists |
| `/create-task-list` | Planning | Create intelligent task list with codebase exploration and GitHub integration |
| `/project-implementation-for-ccasp` | Setup | Complete CCASP project setup - tech stack, CLAUDE.md, GitHub, MCPs |
| `/update-smart` | Maintenance | Smart merge manager for customized assets during updates |
| `/ask-claude` | Discovery | Natural language command discovery - find the right command for any task |
| `/site-intel` | Analysis | Website Intelligence - 5-layer site analysis |
| `/todo-add` | Planning | Quick-add todo with auto-paraphrasing |
| `/todo` | Planning | Smart todo manager with AI intent routing |
| `/orchestration-settings` | Orchestration | View and modify parallel agent and compacting settings |
| `/context-audit` | Token Management | Audit context usage and token budget (requires tokenManagement feature) |
| `/happy-start` | Happy Mode | Start Happy Mode for mobile app integration (requires happyMode feature) |
| `/github-project-menu` | GitHub | View and sync GitHub Project Board status |
| `/github-task-start` | GitHub | Start or complete a GitHub Project Board task |
| `/tunnel-start` | Development | Start tunnel service for mobile testing (requires tunnelServices feature) |
| `/tunnel-stop` | Development | Stop running tunnel service |
| `/phase-track` | Planning | Track progress of phased development plan |
| `/deploy-full` | Deployment | Full-stack deployment (requires deploymentAutomation feature) |
| `/refactor-check` | Refactoring | Fast pre-commit quality gate - lint, type-check, test affected files |
| `/refactor-cleanup` | Refactoring | Daily maintenance automation - fix lint, remove unused imports, format |
| `/refactor-prep` | Refactoring | Pre-refactoring safety checklist - ensure safe conditions |
| `/create-smoke-test` | Testing | Auto-generate Playwright smoke tests for critical user flows |
| `/orchestration-guide` | Orchestration | Quick reference for L1/L2/L3 agent orchestration |
| `/vdb-status` | VDB | Check Vision Driver Bot status, queue, and recommendations |
| `/vdb-scan` | VDB | Scan Vision board for actionable items and queue them |
| `/vdb-execute-next` | VDB | Execute the next task from VDB queue autonomously |
| `/vdb-init` | VDB | Initialize Vision Driver Bot for this project |
| `/ai-constitution-framework` | Code Quality | AI Constitution - code style and architecture preferences enforcement |

## Agents

- **example-agent** - Custom agent

## Skills

- **/example-skill** - Custom skill

## Active Hooks

- **ccasp-update-check** - Active hook
- **example-hook** - Active hook
- **usage-tracking** - Active hook

---

*Generated by Claude CLI Advanced Starter Pack v2.11.2 on 2026-02-10*
