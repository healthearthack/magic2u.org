<div align="center">

# `.changeset/`

**Semantic versioning, automated changelogs, and the package release process for Magic2U Design System.**

[![Changesets](https://img.shields.io/badge/maintained%20with-changesets-F1BE42?style=flat-square)](https://github.com/changesets/changesets)
[![Access: Public](https://img.shields.io/badge/npm%20access-public-3BFFC8?style=flat-square&logo=npm)](https://www.npmjs.com/)
[![Base Branch: main](https://img.shields.io/badge/base%20branch-main-222?style=flat-square&logo=github)](https://github.com/healthearth/Magic2U-Design-System)

[← Back to Root](../README.md)

</div>

---

## Overview

Magic2U Design System uses **[Changesets](https://github.com/changesets/changesets)** to manage package versioning and changelog generation across the monorepo. Changesets is a tool specifically designed for monorepos that publish multiple independent packages — it lets contributors describe *what changed and why* at the time of contribution, rather than leaving version bumping as an afterthought.

The result is that every published package has a traceable, human-readable changelog, version numbers follow strict semantic versioning, and no package is accidentally published without an intentional version bump decision.

---

## How Changesets Works

```
Developer makes a code change to packages/ui/
         │
         ▼
Developer runs: pnpm changeset
         │
         ▼
Changesets CLI prompts:
  1. Which package changed? → @magic2u/ui
  2. Bump type? → minor
  3. Summary of changes? → "Add StatCard delta prop with trend direction"
         │
         ▼
Changesets creates: .changeset/lucky-dogs-sing.md
  (a markdown file describing the change, committed with the PR)
         │
         ▼
PR is reviewed and merged to main
         │
         ▼
release.yml workflow runs:
  pnpm release
  → Changesets reads all .md files in .changeset/
  → Bumps package versions according to described bump types
  → Generates/updates CHANGELOG.md for each changed package
  → Publishes changed packages to npm
  → Deletes the consumed .changeset/*.md files
```

---

## Configuration (`config.json`)

```json
{
  "$schema": "https://unpkg.com/@changesets/config/schema.json",
  "changelog": [
    "@changesets/changelog-github",
    { "repo": "yourusername/Magic2U-Design-System" }
  ],
  "commit": false,
  "linked": [],
  "access": "public",
  "baseBranch": "main"
}
```

### Config Field Reference

| Field | Value | Meaning |
|-------|-------|---------|
| `changelog` | `@changesets/changelog-github` | Generates changelogs with GitHub PR links and contributor attribution |
| `commit` | `false` | Changesets does NOT auto-commit version bumps — the release workflow handles commits |
| `linked` | `[]` | No packages are version-locked together — each bumps independently |
| `access` | `"public"` | All packages are published as public npm packages |
| `baseBranch` | `"main"` | Version comparison is always relative to the `main` branch |

> **Action required:** Update the `repo` field in `config.json` from `"yourusername/Magic2U-Design-System"` to `"healthearth/Magic2U-Design-System"` before the first release.

---

## Creating a Changeset

Every PR that modifies a published package **must include a changeset**. Without one, the release workflow will not bump the package version or generate a changelog entry for that change.

### Step-by-Step

```bash
# 1. After making your code changes, from the monorepo root:
pnpm changeset

# 2. The CLI will ask which packages changed.
#    Use space to select, enter to confirm.
#    Example:
#    ◯ @magic2u/ui
#    ◯ @magic2u/tokens
#    ◯ @magic2u/web-components

# 3. For each selected package, choose the bump type:
#    patch → bug fix or non-breaking tweak
#    minor → new feature, new component, new prop (backwards-compatible)
#    major → breaking change (removed prop, renamed token, API change)

# 4. Write a human-readable summary:
#    "Add delta prop to StatCard for trend direction display"

# 5. Commit the generated .changeset/*.md file with your PR:
git add .changeset/
git commit -m "chore: add changeset for StatCard delta prop"
```

### What the Generated File Looks Like

```markdown
---
"@magic2u/ui": minor
---

Add `delta` and `trend` props to StatCard component.

`delta` accepts a formatted string (e.g., "+3.2%") and `trend` accepts 
`"up"`, `"down"`, or `"neutral"` to control the color treatment of the delta value.
```

---

## Versioning Rules

Magic2U Design System follows [Semantic Versioning](https://semver.org/) strictly.

| Bump | Version Change | When to Use |
|------|---------------|-------------|
| **patch** | `0.1.0 → 0.1.1` | Bug fix with no API change. Fixing a broken style, correcting a typo in a prop name that was wrong, fixing a token value. |
| **minor** | `0.1.0 → 0.2.0` | Backwards-compatible addition. New component, new optional prop, new token, new theme. Consuming apps do not need to change any code. |
| **major** | `0.1.0 → 1.0.0` | Breaking change. Renaming or removing a prop, changing a token name, restructuring import paths. Consuming apps **must** update their code. |

### When in Doubt

If you're unsure whether your change is a `patch` or `minor`, default to **minor**. It is always safer to signal a new capability than to understate it. Reserve **major** for changes that genuinely require consuming teams to update their code.

---

## Release Cadence

| Release Type | Frequency | Trigger |
|-------------|-----------|---------|
| Patch releases | As needed | Bug fix merged to main |
| Minor releases | Weekly sprint cycle | Feature work merged to main |
| Major releases | Quarterly or as required | Breaking changes, announced in advance |
| Pre-releases (`beta`, `alpha`) | During major development cycles | Branch-based releases, not from main |

---

## Changelog Generation

The `@changesets/changelog-github` package generates rich changelogs that include:

- The change summary written by the contributor
- A link to the PR on GitHub
- Attribution to the contributor's GitHub username

**Example generated CHANGELOG.md entry:**

```markdown
## 0.2.0

### Minor Changes

- [#42](https://github.com/healthearth/Magic2U-Design-System/pull/42)
  [`a1b2c3d`](https://github.com/healthearth/Magic2U-Design-System/commit/a1b2c3d)
  Thanks [@contributor](https://github.com/contributor)!

  Add `delta` and `trend` props to StatCard component for displaying 
  metric change indicators with directional color treatment.
```

---

## PR Workflow Integration

The changesets process is integrated into the contribution workflow:

1. **Creating a PR** — Include a `.changeset/*.md` file for any package you modified
2. **During review** — Reviewers can request a changeset bump type change if they disagree with `patch` vs `minor`
3. **Merge to main** — The release workflow picks up your changeset automatically
4. **After merge** — Changesets opens a "Version Packages" PR that accumulates all pending changesets and proposes the version bumps. When this PR is merged, packages are published.

---

## Skipping a Changeset

If your change does not affect any published package (e.g., updating a README, fixing a CI config, adding a test without changing component behavior), you do not need a changeset. Examples:

- ✅ No changeset needed: CI workflow fix, README update, test addition, tooling config change
- ❌ Changeset required: any change to `packages/ui/`, `packages/tokens/`, `packages/web-components/`

---

## Related

- [`../.github/workflows/release.yml`](../.github/README.md) — The workflow that consumes changesets and publishes packages
- [`../packages/`](../packages/README.md) — The packages that changesets version and publish
- [Changesets documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md) — Official Changesets guide
