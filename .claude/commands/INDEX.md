# claude-debug-plugin - Slash Commands

> Installed by Claude CLI Advanced Starter Pack v2.11.2 on 2026-02-10

## Quick Start

Type `/menu` to open the interactive project menu.

## Available Commands

| Command | Description |
|---------|-------------|
| `/menu` | Interactive ASCII menu for project commands and tools |
| `/menu-happy` | Mobile-optimized menu for Happy CLI (40-char width) |
| `/ccasp-setup` | CCASP Setup Wizard - vibe-code friendly project configuration |
| `/update-check` | Check for CCASP updates and add new features to your project |
| `/ccasp-panel` | Launch control panel in new terminal (agents, skills, hooks, MCP) |
| `/e2e-test` | Run E2E tests with Playwright (ralph loop, headed, watch modes) |
| `/ralph` | Ralph Loop - Continuous test-fix cycle until all tests pass |
| `/refactor-workflow` | Guided refactoring workflow with branch, task list, and GitHub issue |
| `/refactor-analyze` | Deep complexity analysis for refactoring prioritization |
| `/golden-master` | Generate characterization tests before refactoring |
| `/github-task` | Create GitHub issues with codebase analysis |
| `/github-menu-issues-list` | Mobile-friendly menu of open GitHub issues |
| `/create-task-list-for-issue` | Start working on a GitHub issue by number |
| `/phase-dev-plan` | Create phased development plans (95%+ success rate) |
| `/create-agent` | Create L1/L2/L3 agents for Claude Code |
| `/create-hook` | Create enforcement hooks (PreToolUse, PostToolUse, UserPromptSubmit) |
| `/create-skill` | Create RAG-enhanced skill packages |
| `/explore-mcp` | Discover and install MCP servers based on tech stack |
| `/claude-audit` | Audit CLAUDE.md and .claude/ against best practices |
| `/detect-tech-stack` | Re-run tech stack detection and update configuration |
| `/generate-agents` | Generate stack-specific agents from detected tech stack |
| `/project-explorer` | Interactive scaffolding wizard for fresh projects |
| `/init-ccasp-new-project` | Initialize CCASP Full preset on empty folder (for Happy users) |
| `/roadmap-sync` | Sync roadmaps with GitHub Project Board |
| `/claude-settings` | Configure Claude CLI permissions and modes |
| `/codebase-explorer` | Analyze codebase structure and find relevant files |
| `/rag-pipeline` | Generate RAG pipeline with L1 orchestrator + L2 specialists |
| `/create-task-list` | Create intelligent task list with codebase exploration and GitHub integration |
| `/project-implementation-for-ccasp` | Complete CCASP project setup - tech stack, CLAUDE.md, GitHub, MCPs |
| `/update-smart` | Smart merge manager for customized assets during updates |
| `/ask-claude` | Natural language command discovery - find the right command for any task |
| `/site-intel` | Website Intelligence - 5-layer site analysis |
| `/todo-add` | Quick-add todo with auto-paraphrasing |
| `/todo` | Smart todo manager with AI intent routing |
| `/orchestration-settings` | View and modify parallel agent and compacting settings |
| `/context-audit` | Audit context usage and token budget (requires tokenManagement feature) |
| `/happy-start` | Start Happy Mode for mobile app integration (requires happyMode feature) |
| `/github-project-menu` | View and sync GitHub Project Board status |
| `/github-task-start` | Start or complete a GitHub Project Board task |
| `/tunnel-start` | Start tunnel service for mobile testing (requires tunnelServices feature) |
| `/tunnel-stop` | Stop running tunnel service |
| `/phase-track` | Track progress of phased development plan |
| `/deploy-full` | Full-stack deployment (requires deploymentAutomation feature) |
| `/refactor-check` | Fast pre-commit quality gate - lint, type-check, test affected files |
| `/refactor-cleanup` | Daily maintenance automation - fix lint, remove unused imports, format |
| `/refactor-prep` | Pre-refactoring safety checklist - ensure safe conditions |
| `/create-smoke-test` | Auto-generate Playwright smoke tests for critical user flows |
| `/orchestration-guide` | Quick reference for L1/L2/L3 agent orchestration |
| `/vdb-status` | Check Vision Driver Bot status, queue, and recommendations |
| `/vdb-scan` | Scan Vision board for actionable items and queue them |
| `/vdb-execute-next` | Execute the next task from VDB queue autonomously |
| `/vdb-init` | Initialize Vision Driver Bot for this project |
| `/ai-constitution-framework` | AI Constitution - code style and architecture preferences enforcement |

## Project Structure

```
.claude/
├── commands/     # Slash commands (you are here)
├── agents/       # Custom agents
├── skills/       # Skill packages
├── hooks/        # Enforcement hooks
├── docs/         # Documentation
├── settings.json
└── settings.local.json
```

## Reinstall/Update

```bash
npx claude-cli-advanced-starter-pack init --force
```

## Learn More

- [Claude CLI Advanced Starter Pack on npm](https://www.npmjs.com/package/claude-cli-advanced-starter-pack)
- [GitHub Repository](https://github.com/evan043/claude-cli-advanced-starter-pack)
