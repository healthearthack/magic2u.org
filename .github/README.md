<div align="center">

# `.github/`

**CI/CD automation, contribution governance, and team standards for the Magic2U Design System.**

[![CI](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/ci.yml/badge.svg)](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/ci.yml)
[![Accessibility](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/accessibility-check.yml/badge.svg)](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/accessibility-check.yml)
[![Deploy](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/deploy-pages.yml)

[← Back to Root](../README.md)

</div>

---

## Overview

The `.github/` directory is the governance layer of the Magic2U Design System. It contains every workflow, template, and standard that governs how code moves from a developer's machine to production. This is where engineering quality, accessibility compliance, and team process are enforced — automatically where possible, and through structured human review where not.

Every file here was deliberately designed for **team-scale contribution** — not solo development. The goal is that any engineer, regardless of familiarity with the design system, can open a PR and be guided by the structure in this directory toward a correct, safe, and documented contribution.

---

## Directory Structure

```
.github/
├── workflows/
│   ├── ci.yml                    # Build, lint, and test on every PR and push
│   ├── accessibility-check.yml   # A11y gate on every pull request
│   ├── release.yml               # Publish packages on push to main
│   └── deploy-pages.yml          # Deploy metrics site to GitHub Pages
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml            # Structured bug report form
│   ├── feature_request.yml       # Feature / enhancement proposal form
│   └── design-system-proposal.yml # New component or token proposal form
├── PULL_REQUEST_TEMPLATE.md      # PR checklist enforced on every merge request
├── CODEOWNERS                    # Automatic reviewer assignment
└── README.md                     # This file
```

---

## Workflows

### `ci.yml` — Continuous Integration

Runs on **every pull request** and **every push to `main`**. This is the primary quality gate.

```yaml
trigger: pull_request, push (main)
runner:  ubuntu-latest
steps:
  1. Checkout code           (actions/checkout@v3)
  2. Setup pnpm              (pnpm/action-setup@v2, version: 8)
  3. pnpm install            (installs all workspace deps)
  4. pnpm build              (builds all packages)
  5. pnpm lint               (ESLint across all workspaces)
  6. pnpm test               (Vitest across all packages)
```

**A PR cannot be merged if this workflow fails.** Build failures, lint errors, and test failures are all blocking.

---

### `accessibility-check.yml` — A11y Gate

Runs on **every pull request**. Isolated to the accessibility test suite for fast, targeted feedback.

```yaml
trigger: pull_request
runner:  ubuntu-latest
steps:
  1. Checkout code
  2. pnpm install
  3. pnpm test --filter accessibility   # Runs axe-core and WCAG 2.1 AA audit
```

**Accessibility is non-negotiable.** Any component that regresses below WCAG 2.1 AA compliance blocks the PR. The filter isolates the a11y test suite to keep the check fast (~60s target).

Target: **≥ 94/100 accessibility score** across all components.

---

### `release.yml` — Package Publishing

Runs on **push to `main`** (after CI passes). Publishes changed packages to npm using Changesets.

```yaml
trigger: push (main)
runner:  ubuntu-latest
steps:
  1. Checkout code
  2. pnpm install
  3. pnpm build           (ensure fresh build before publish)
  4. pnpm release         (changesets/action — publishes changed packages)
```

This workflow **only publishes packages that have a changeset**. If no `.changeset/*.md` files are present in the merge, nothing is published. This is a safety mechanism — publishing is opt-in via the changeset authoring step.

See [`.changeset/`](../.changeset/README.md) for the full versioning workflow.

---

### `deploy-pages.yml` — GitHub Pages Deployment

Runs on **push to `main`**. Generates metrics data and deploys the live showcase to GitHub Pages.

```yaml
trigger: push (main)
runner:  ubuntu-latest
steps:
  1. Checkout code              (actions/checkout@v4)
  2. Setup pnpm                 (pnpm/action-setup@v2, version: 9)
  3. pnpm install
  4. pnpm metrics               (generates JSON output into public/metrics/)
  5. Deploy public/ to gh-pages (peaceiris/actions-gh-pages@v3)
```

The deployed site is available at: `https://healthearth.github.io/Magic2U-Design-System`

---

## Issue Templates

All issues opened on this repository are routed through structured YAML forms. This ensures that every report or request contains the minimum information needed for a maintainer to act on it without back-and-forth.

### 🐛 Bug Report (`bug_report.yml`)

Use when a component, token, or build behavior is **not working as documented**.

**Required fields:**
- `Description` — A clear explanation of the bug
- `Steps to Reproduce` — Numbered steps to reproduce the issue consistently

**Optional fields:**
- `Affected Package` — e.g., `packages/ui`, `packages/tokens`
- `Expected Behavior` — What should happen

**Label applied:** `bug`

```
Title format: [Bug]: <short description>
```

---

### ✨ Feature Request (`feature_request.yml`)

Use when proposing a **new capability, behavior change, or enhancement** that does not exist yet.

**Required fields:**
- `Problem Statement` — What problem does this solve? Why does it matter?

**Optional fields:**
- `Proposed Solution` — How you'd like to see it addressed
- `Alternatives Considered` — What else you evaluated

**Label applied:** `enhancement`

```
Title format: [Feature]: <short description>
```

---

### 🎨 Design System Proposal (`design-system-proposal.yml`)

Use when proposing a **new component, design token, or design pattern** to add to the system.

**Fields:**
- `Component or Token Name` — e.g., `Button`, `Card`, `Spacing Scale`
- `Use Case` — What product problem does this solve? Which teams need it?
- `Visual Reference or Inspiration` — Figma link, screenshot, or description

**Label applied:** `design-system`

```
Title format: [Design Proposal]: <component or token name>
```

This template exists because design system additions need **more context than a typical feature request** — we need to understand cross-team need, existing usage patterns, and visual intent before approving new additions to the system.

---

## Pull Request Template (`PULL_REQUEST_TEMPLATE.md`)

Every PR on this repository must complete the PR template checklist before it can be merged.

### Required Sections

**Description** — Explain the purpose and context of the change. What does it do? Why?

**Type of Change** — Select one or more:
- Bug fix
- New component
- Token update
- Accessibility improvement
- Performance improvement

**Checklist** — All four boxes must be checked before merge:

| Item | Why It's Required |
|------|------------------|
| ✅ Tests added | All components need unit tests and a11y tests |
| ✅ Storybook updated | All UI changes must be reflected in Storybook stories |
| ✅ Accessibility verified | Manual a11y review in addition to automated CI check |
| ✅ Documentation updated | README, Storybook docs, or token schema docs must reflect any changes |

---

## CODEOWNERS

All PRs in this repository automatically request a review from the `@healthearth` team. This ensures that no change merges without at least one design system maintainer reviewing it.

```
# .github/CODEOWNERS
*  @healthearth
```

The `*` glob means the `@healthearth` team is the required reviewer for **every file** in the repository. This is intentional — the design system is a shared infrastructure, and changes to any part of it affect all consuming teams.

---

## Secrets Required

The following GitHub Actions secrets must be configured for workflows to function:

| Secret | Used By | Purpose |
|--------|---------|---------|
| `GITHUB_TOKEN` | `deploy-pages.yml` | Authenticate GitHub Pages deployment |
| `NPM_TOKEN` | `release.yml` | Authenticate npm package publishing |

Configure at: **Repository Settings → Secrets and variables → Actions**

---

## Related

- [`../README.md`](../README.md) — Root README with full contributing guide
- [`../.changeset/`](../.changeset/README.md) — How versioning and releases work
- [`../packages/`](../packages/README.md) — The packages that CI builds and release.yml publishes
