# Magic2U repository automation

[![Continuous Integration](https://github.com/healthearthack/magic2u.org/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/healthearthack/magic2u.org/actions/workflows/ci.yml)
[![Continuous Deployment: Cloudflare](https://img.shields.io/badge/Continuous%20Deployment-Cloudflare-F38020?logo=cloudflare&logoColor=white)](https://magic2u.org)

This directory contains the contribution standards and automation for the Magic2U design-system platform.

## CI/CD lifecycle

**CI/CD means Continuous Integration and Continuous Deployment.**

1. A change is pushed to `main`.
2. GitHub Actions installs dependencies, builds the workspace, runs lint checks, and runs available tests.
3. Cloudflare Workers Builds checks out the same commit, creates the production build, and deploys it.
4. The custom domains serve the new version at [magic2u.org](https://magic2u.org) and [www.magic2u.org](https://www.magic2u.org).

The GitHub Continuous Integration badge reports the live status of `ci.yml`. The Cloudflare badge identifies the production deployment platform and links to the live website; it is not presented as a live status monitor.

## Active automation

| Automation | Trigger | Purpose |
| --- | --- | --- |
| Continuous Integration | Push to `main` and pull requests | Install dependencies, build, lint, and run available tests |
| Accessibility Check | Pull requests | Run the accessibility-focused test command |
| Release Readiness | Manual | Validate a release candidate without publishing packages |
| Cloudflare Workers Build | Push to `main` | Build and deploy the production application |

Production hosting is provided by Cloudflare. GitHub Pages is not part of the current deployment path.

## Workflow files

- [`workflows/ci.yml`](workflows/ci.yml) is the required product-health workflow.
- [`workflows/accessibility-check.yml`](workflows/accessibility-check.yml) runs only when a pull request is opened or updated.
- [`workflows/release.yml`](workflows/release.yml) is manually dispatched for release validation.
- [`workflows/README.md`](workflows/README.md) explains the current automation lifecycle.

## Contribution resources

- [`CODEOWNERS`](CODEOWNERS) assigns repository review ownership.
- [`PULL_REQUEST_TEMPLATE.md`](PULL_REQUEST_TEMPLATE.md) provides the contribution checklist.
- [`ISSUE_TEMPLATE/`](ISSUE_TEMPLATE/) contains structured bug, feature, and design-system proposal forms.

## Source of truth

The canonical repository is [`healthearthack/magic2u.org`](https://github.com/healthearthack/magic2u.org). References to `healthearth/Magic2U-Design-System`, GitHub Pages, automatic npm publishing, or `deploy-pages.yml` are obsolete.

[Back to the project README](../README.md)
