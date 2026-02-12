# Contributing to Swift Testing Agent Skill

Thanks for your interest in improving this skill. Contributions that make Swift Testing guidance clearer, more accurate, and more up to date are welcome.

## About Agent Skills

Agent Skills are structured prompt assets with:
- A `SKILL.md` file that defines behavior, routing, and checklists
- Reference files that provide focused guidance for specific topics

## Recommended Workflow (Skill Creator)

If you use the `skill-creator` skill, you can:
- Propose changes in plain language
- Have the skill generate or refine `SKILL.md` and reference content
- Review for Swift Testing accuracy and consistency

## Alternative Workflows

### Without skill-creator
- Make changes directly in `SKILL.md` or `swift-testing-expert/references/`
- Keep content concise and focused on Swift Testing

### Manual edits
- Edit Markdown files directly
- Ensure headings and checklists stay consistent

## Types of Contributions

- Fix incorrect Swift Testing guidance
- Add new modern testing APIs or migration patterns
- Improve clarity in checklists and decision trees
- Expand reference files with specific Swift Testing code examples
- Improve documentation in README or this guide

## Quality Standards

- Swift Testing-focused content only
- No architecture mandates or project structure requirements
- Avoid broad IDE/tooling walkthroughs beyond essential workflow context
- Use modern Swift Testing APIs and flag outdated XCTest-only patterns when relevant
- Prefer clear, direct language over opinionated phrasing
- Keep `SKILL.md` concise; place detailed examples in `swift-testing-expert/references/`

## Pull Request Process

1. Fork the repo (or branch if you have access).
2. Make changes in a focused scope.
3. Ensure `SKILL.md` and references remain consistent.
4. Open a PR with a short summary and validation notes.

## Development Setup

- Standard Markdown editing is sufficient.
- If you add or rename reference files, the README structure is auto-synced via GitHub Actions.
- For same-repo PRs, `.github/workflows/sync-readme-references.yml` may commit and push the README sync change to your branch automatically.

## Validation and Packaging

Run (replace `<path-to-skill-creator>` with your local install path):

```bash
python3 <path-to-skill-creator>/scripts/package_skill.py ./swift-testing-expert ./dist
```

Example on many Cursor setups:

```bash
python3 ~/.cursor/skills/skill-creator/scripts/package_skill.py ./swift-testing-expert ./dist
```

The script validates structure/frontmatter and creates a distributable `.skill` file.

## Resources

- Agent Skills documentation: https://docs.anthropic.com/en/docs/claude-code/agent-skills
- Swift Testing documentation: https://developer.apple.com/documentation/testing

## Code of Conduct

Be respectful and constructive. Assume positive intent and focus on improving the quality of Swift Testing guidance.
