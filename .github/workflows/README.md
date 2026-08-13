# Magic2U automation

Magic2U uses GitHub Actions for product validation. Cloudflare Workers Builds handles production deployment from the `main` branch.

This document explains each workflow and how it fits into the Magic2U ecosystem.

---

## 1. Continuous Integration

**File:** `.github/workflows/ci.yml`  
**Purpose:** Validate code quality on every push and pull request.

The active workflow includes:

- TypeScript type checking  
- Linting  
- Unit tests  
- Build verification  

This is the required product-health check on `main`.

---

## 2. Accessibility check

**File:** `.github/workflows/accessibility-check.yml`  
**Purpose:** Prevent accessibility regressions before merging.

Magic2U treats accessibility as a first‑class requirement. This workflow:

- Installs dependencies  
- Runs the accessibility test suite  
- Blocks PRs that introduce violations  

This keeps the design system inclusive and compliant.

---

## 3. Release readiness

**File:** `.github/workflows/release.yml`  
**Purpose:** Manually validate a release candidate before publication.

This workflow is started with **Actions → Release Readiness → Run workflow**. It installs dependencies, builds the product, runs lint checks, and runs available tests. It does not publish packages.

## Production deployment

Cloudflare, not GitHub Pages, hosts `magic2u.org`. A successful push to `main` starts a Cloudflare Workers Build using the repository's Wrangler configuration.

---

# 🗂 Workflow Summary Table

| Workflow | Purpose | Trigger |
|---------|---------|---------|
| **CI** | Build, lint, test, type-check | Push & PR |
| **Accessibility Check** | Run a11y test suite | PR |
| **Cloudflare Workers Build** | Build and deploy `magic2u.org` | Push to `main` |
| **Release Readiness** | Validate a release candidate | Manual |

---

# 🧭 How These Workflows Fit Together

Magic2U’s automation pipeline follows a clear flow:

1. **Developer opens a PR**  
   - CI runs  
   - Accessibility checks run  
   - Preview deployments run (optional)

2. **PR is reviewed and merged**
   - Continuous Integration runs on `main`
   - Cloudflare builds and deploys production

3. **A release candidate needs validation**
   - A maintainer manually runs Release Readiness

This creates a smooth, professional, end‑to‑end development experience.

---

# 🪄 Summary

Magic2U’s GitHub Actions workflows ensure:

- High code quality  
- Strong accessibility guarantees  
- Cloudflare production deployment
- Repeatable manual release validation

These workflows form the backbone of a scalable, contributor‑friendly engineering system.
