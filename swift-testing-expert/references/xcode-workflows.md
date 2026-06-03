# Xcode Workflows

## When to use this reference

Use this file when debugging failures quickly in Xcode, configuring focused test plans, and extracting insights from large test reports.

## Test Navigator usage

- Run tests at function, suite, tag, and argument level.
- In parameterized tests, rerun only failing arguments for fast iteration.
- Use "Group by Tag" to inspect cross-suite behavior quickly.

### Example flow

1. Run suite.
2. Open failing parameterized argument.
3. Rerun only that argument to iterate quickly.

## Filtering and grouping

- Use tag filters in navigator for focused development loops.
- Keep tag naming stable so teams can reuse filters and plans.
- Prefer tag-based include/exclude over fragile test-name patterns.

### Suggested tag conventions

- `core` - always-on fast checks
- `integration` - external dependency coverage
- `regression` - bug-fix lock-in tests
- `flaky` - temporary quarantine while fixing

## Test plans

- Configure include/exclude tags per target in test plans.
- Use "any tags" vs "all tags" intentionally when combining filters.
- Maintain separate plans for:
  - fast core checks
  - integration checks
  - slower/optional scenarios

### Example plan strategy

- `Core` plan: include `core`, exclude `integration`.
- `Integration` plan: include `integration`, exclude `flaky`.
- `ReleaseGate` plan: include `core` and `regression`.

## Report triage

- Review distribution insights for failure clustering by tags/bugs/destinations.
- Investigate grouped failures first (often indicates systemic regressions).
- Ensure disabled/known-issue reasons are visible and actionable in reports.

### Triage sequence

1. Check if failures cluster by a shared tag.
2. Open one representative failure.
3. Confirm whether root cause is common (dependency/outage/config) or test-local.
4. Fix root cause, then remove temporary known-issue annotations.

## Diagnostic quality

- Keep expectations expressive and narrow.
- Improve argument/type descriptions for faster root-cause identification.
- Ensure bug traits link to trackable issues.

## Attachments (Swift 6.3+)

- Attach supporting artifacts to a test with `Attachment.record(_:named:)` so they surface in the test report alongside the result — useful for the bytes that explain a failure (a rendered image, a captured payload, a snapshot).
- Image attachments are supported on Apple and Windows platforms as of Swift 6.3.
- Attach the smallest artifact that explains the failure; don't dump large blobs on every run — prefer attaching only inside the failing branch.

### Example: attach a snapshot on mismatch

```swift
import Testing

@Test func rendersBadge() throws {
 let image = try renderBadge(count: 5)

 if image != referenceBadge {
 Attachment.record(image, named: "rendered-badge.png") // visible in the report
 Issue.record("Badge render did not match reference")
 }
}
```

## Checklist

- Tag naming is consistent across suites.
- Test plans reflect team workflow (local dev, CI, release).
- Parameterized failures are rerun at argument-level before broad reruns.
- Failure-explaining artifacts are attached (Swift 6.3+) rather than printed.
