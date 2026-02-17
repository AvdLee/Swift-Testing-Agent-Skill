# Swift Testing Agent Skill

Expert guidance for any AI coding tool that supports the [Agent Skills open format](https://agentskills.io/home) - modern Swift Testing APIs, XCTest migration, parameterized tests, traits/tags, async testing, and parallel execution patterns.

This repository distills practical Swift Testing best practices into actionable, concise references for agents and code review workflows.

## Who this is for
- Teams adopting Swift Testing who want quick, correct defaults
- Developers migrating existing XCTest suites incrementally
- Anyone debugging flaky tests, parallel test behavior, or async test reliability

## See also my other skills:
- [SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill)
- [Swift Concurrency Expert](https://github.com/AvdLee/Swift-Concurrency-Agent-Skill)
- [Core Data Expert](https://github.com/AvdLee/Core-Data-Agent-Skill)

## How to Use This Skill

### Option A: Using skills.sh (recommended)
Install this skill with a single command:

```bash
npx skills add https://github.com/avdlee/swift-testing-agent-skill --skill swift-testing-expert
```

For more information, visit the [skills.sh platform page](https://skills.sh/avdlee/swift-testing-agent-skill/swift-testing-expert).

Then use the skill in your AI agent, for example:
> Use the swift testing skill and review this test target for migration opportunities and flaky parallel behavior.

### Option B: Claude Code Plugin

#### Personal Usage
To install this Skill for your personal use in Claude Code:

1. Add the marketplace:

```bash
/plugin marketplace add AvdLee/Swift-Testing-Agent-Skill
```

2. Install the Skill:

```bash
/plugin install swift-testing-expert@swift-testing-agent-skill
```

#### Project Configuration
To automatically provide this Skill to everyone working in a repository, configure the repository's `.claude/settings.json`:

```json
{
  "enabledPlugins": {
    "swift-testing-expert@swift-testing-agent-skill": true
  },
  "extraKnownMarketplaces": {
    "swift-testing-agent-skill": {
      "source": {
        "source": "github",
        "repo": "AvdLee/Swift-Testing-Agent-Skill"
      }
    }
  }
}
```

When team members open the project, Claude Code will prompt them to install the Skill.

### Option C: Manual install
1) **Clone** this repository.  
2) **Install or symlink** the `swift-testing-expert/` folder following your tool's official skills installation docs (see links below).  
3) **Use your AI tool** as usual and ask it to use the "swift-testing-expert" skill for Swift Testing tasks.

#### Where to Save Skills
Follow your tool's official documentation, here are a few popular ones:
- **Codex:** [Where to save skills](https://developers.openai.com/codex/skills/#where-to-save-skills)
- **Claude:** [Using Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview#using-skills)
- **Cursor:** [Enabling Skills](https://cursor.com/docs/context/skills#enabling-skills)

**How to verify**:

Your agent should reference the routing/playbook in `swift-testing-expert/SKILL.md` and jump into the relevant file in `swift-testing-expert/references/`.

## What This Skill Offers

This skill gives your AI coding tool practical Swift Testing guidance. It can:

### Guide Your Test Architecture Decisions
- Choose when to use suites, traits, tags, and display names
- Convert repetitive tests into parameterized tests with clean argument design
- Apply parallel-safe patterns and know when `.serialized` is a temporary compromise
- Set up tag-driven test plan filtering and report analysis workflows

### Write Better Swift Tests
- Use `#expect` effectively with rich diagnostics
- Use `#require` for prerequisite flow and safer unwrapping
- Model thrown-error expectations clearly
- Improve output readability with test-specific descriptions

### Migrate from XCTest Pragmatically
- Coexist Swift Testing and XCTest in one target during migration
- Map common `XCTAssert*` patterns to Swift Testing macros
- Keep XCTest where still required (`XCUIApplication`, `XCTMetric`, Objective-C tests)
- Convert duplicated XCTest methods into parameterized Swift Testing coverage

### Improve Reliability and Performance
- Remove hidden inter-test dependencies surfaced by randomized, parallel execution
- Stabilize server-side tests with repository isolation and in-memory implementations
- Bridge callback APIs to async/await for deterministic tests
- Reduce CI noise with known-issue handling and actionable trait metadata

## What Makes This Skill Different

**Source-grounded**: Built from SwiftLee's complete Swift Testing article set plus WWDC 2024 sessions "Meet Swift Testing" and "Go further with Swift Testing."

**Non-Opinionated**: Focuses on test correctness, readability, and maintainability without forcing a project architecture.

**Modern-first**: Prioritizes Swift Testing primitives, parallel defaults, and macro-based diagnostics over legacy assertion styles.

**Practical and concise**: Emphasizes playbooks and decision points teams actually use during migrations and ongoing test maintenance.

## Skill Structure

<!-- references-structure:start -->
```text
swift-testing-expert/
  SKILL.md
  references/
    _index.md
    async-testing-and-waiting.md - Async waiting, continuations, and callback-event testing
    expectations.md - #expect, #require, throw checks, and known issues
    fundamentals.md - @Test, suites, structure, and naming patterns
    migration-from-xctest.md - Incremental XCTest coexistence and migration strategy
    parallelization-and-isolation.md - Parallel defaults, randomized order, and .serialized usage
    parameterized-testing.md - Single/multi-argument tests, zip pairing, and scaling
    performance-and-best-practices.md - High-signal testing defaults for speed, determinism, and flakiness prevention
    traits-and-tags.md - Traits, tags, conditions, bug links, and test-plan filtering
    xcode-workflows.md - Test navigator/report workflows and diagnostics practices
```
<!-- references-structure:end -->

## Resources

This skill is based on:
- **[Swift Testing category on SwiftLee](https://www.avanderlee.com/category/swift-testing/)** - complete article set on modern Swift Testing patterns
- **[WWDC 2024-10179: Meet Swift Testing transcript](https://devimages-cdn.apple.com/wwdc-services/transcripts/individual/wwdc2024/wwdc2024-10179/eng_7a6b3a31be5f/wwdc2024-10179-transcript-eng.json)** - foundational APIs and migration context
- **[WWDC 2024-10195: Go further with Swift Testing transcript](https://devimages-cdn.apple.com/wwdc-services/transcripts/individual/wwdc2024/wwdc2024-10195/eng_2c5849b0d379/wwdc2024-10195-transcript-eng.json)** - advanced workflows for tags, test plans, and parallelism
- **[Defining test functions (Apple Developer Documentation)](https://developer.apple.com/documentation/testing/definingtests)** - canonical guidance on declaring and customizing tests
- **[Organizing test functions with suite types (Apple Developer Documentation)](https://developer.apple.com/documentation/testing/organizingtests)** - suite behavior, inheritance, and initializer/availability constraints
- **[Migrating a test from XCTest (Apple Developer Documentation)](https://developer.apple.com/documentation/testing/migratingfromxctest)** - official migration mappings and async/testing semantics

## Contributing

Contributions are welcome! This repository follows the [Agent Skills open format](https://agentskills.io/home), which has specific structural requirements.

**We strongly recommend using AI assistance for contributions:**
- Use the [skill-creator skill](https://github.com/anthropics/skills/tree/main/skills/skill-creator) to ensure proper formatting
- This helps maintain the Agent Skills format and ensures your contribution works correctly with AI agents

**Please read [CONTRIBUTING.md](CONTRIBUTING.md) for:**
- How to update `SKILL.md` and references safely
- Agent Skills format requirements
- Quality standards and review criteria
- Pull request process

## About the Author

Created by [Antoine van der Lee](https://www.avanderlee.com). This skill distills Swift Testing guidance from SwiftLee articles and WWDC material into an implementation-oriented playbook for AI assistants.

## License

This skill is open-source and available under the MIT License. See [LICENSE](LICENSE) for details.
