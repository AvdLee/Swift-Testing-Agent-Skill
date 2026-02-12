# GitHub Copilot Instructions: Agent Skills Expert (Swift Testing)

Review changes as an **Agent Skills expert**, focusing on the **Agent Skills open format** specification and ensuring this repository stays a **Swift Testing-focused, migration-friendly, modern-testing** skill.

## Core Agent Skills Principles

### Format Compliance
- **`SKILL.md` required**: Every skill directory must contain a `SKILL.md` with YAML frontmatter.
- **YAML frontmatter requirements**:
 - **`name`**: non-empty, **<= 64 chars**, **lowercase letters/numbers/hyphens only**.
 - **`description`**: non-empty, **<= 1024 chars**, clearly states **what the skill does** and **when to use it**.
- **Progressive disclosure**: keep `SKILL.md` as the primary entrypoint; move deep dives into `swift-testing/references/`.
- **Filesystem-based design**: content should be organized so agents can load only what they need (metadata -> instructions -> references).

### Skill Content Organization (Progressive Disclosure)

**Level 1: Metadata (always loaded)**
- YAML frontmatter should be concise and trigger-relevant.

**Level 2: Instructions (loaded when triggered)**
- `swift-testing/SKILL.md` body should contain workflows, checklists, decision trees, and quick references.
- Avoid turning `SKILL.md` into an encyclopedia; prefer linking out to references.

**Level 3: Resources (loaded as needed)**
- Topic-specific guidance lives in `swift-testing/references/*.md`.
- References should be linked from `SKILL.md` so agents discover them naturally.

## Swift Testing Repository Constraints (Keep This Skill "On Mission")
- **Swift Testing-first**: guidance should prioritize `import Testing`, `@Test`, suites, traits, tags, and macro-based expectations.
- **Migration-aware**: allow XCTest coexistence and incremental migration, but keep XCTest usage scoped to unsupported areas (UI automation, `XCTMetric`, Objective-C tests).
- **No architecture mandates**: do not prescribe app architectures or project structures.
- **No broad IDE walkthroughs**: mention workflows only when they directly improve test outcomes.
- **Modern APIs and semantics**:
 - Prefer `#expect`/`#require` over legacy assert families in Swift Testing code.
 - Use `@available` on tests where relevant; do not apply `@available` to suite types.
 - Call out default parallel execution and isolation requirements.
- **Accuracy over novelty**: do not invent unsupported APIs or migration shortcuts.

## Review Focus Areas

1. **Description Quality**
 - Does the description say **what the skill does** and **when to use it** (trigger conditions)?
 - Is it specific enough to be selected over other skills?

2. **Instruction Clarity**
 - Are instructions actionable (triage paths, decision trees, migration steps)?
 - Are examples correct Swift Testing usage and aligned with Apple docs?

3. **Progressive Disclosure**
 - Is `SKILL.md` focused (not duplicating large reference content)?
 - Are deeper topics moved into `references/` and linked appropriately?

4. **Swift Testing Correctness**
 - Guidance for test declaration and suite organization is accurate.
 - Migration mappings from XCTest are correct and non-destructive.
 - Async waiting guidance uses modern concurrency and confirmations where needed.
 - Parallelization guidance prioritizes fixing isolation over blanket serialization.

5. **Safety / Security (for automation & scripts)**
 - GitHub Actions and scripts should avoid surprising network behavior and avoid writing outside the repo.
 - Dependencies should be minimal and justified.

## Common Issues to Flag
- **Missing/invalid YAML frontmatter** in `SKILL.md`.
- **Invalid `name`** (uppercase, underscores, spaces, too long).
- **Vague `description`** without clear trigger conditions.
- **Overlong `SKILL.md`** that repeats reference content instead of linking to it.
- **Unlinked references** in `swift-testing/references/` not discoverable from `SKILL.md`.
- **Incorrect XCTest migration claims** (e.g. suggesting unsupported 1:1 API replacements).
- **Guidance that imports `Testing` in non-test targets**.
- **Applying `@available` to suite types** or ignoring suite initializer constraints.
- **Unnecessary `.serialized` guidance** without first addressing shared-state design.

## Resources
- Agent Skills overview: https://agentskills.io/home
- Agent Skills docs: https://docs.anthropic.com/en/docs/claude-code/agent-skills
- Claude Platform docs (Agent Skills): https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- Defining tests: https://developer.apple.com/documentation/testing/definingtests
- Organizing tests: https://developer.apple.com/documentation/testing/organizingtests
- Migrating from XCTest: https://developer.apple.com/documentation/testing/migratingfromxctest

---

**Remember**: You are reviewing as an Agent Skills expert. Prioritize format compliance, progressive disclosure, Swift Testing accuracy, and migration-safe guidance.
