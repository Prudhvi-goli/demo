# AI Development Context

Read the following files **in order** before implementing anything or making any architectural decision:

1. `context/project-overview.md` — What this project is, who it's for, what's in scope
2. `context/architecture.md` — File structure, component patterns, import conventions
3. `context/ui-context.md` — Design tokens, visual patterns, component styles
4. `context/code-standards.md` — How code must be written, naming, patterns
5. `context/ai-workflow-rules.md` — How you (the AI) must behave during development
6. `context/progress-tracker.md` — What's built, what's next, session checkpoints
7. `context/error-log.md` — Past failures and what NOT to repeat

## Rules

- Update `context/progress-tracker.md` after completing each component or task.
- If your implementation changes the architecture or introduces a new pattern, update `context/architecture.md` before continuing.
- If you fail at something twice, log it in `context/error-log.md` and stop — ask the human for direction.
- Never guess visual values. If a screenshot is provided, match it exactly. If not, ask.
