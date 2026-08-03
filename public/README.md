<div align="center">

# `public/`

**Static assets, generated metrics output, and the deployed GitHub Pages site for Magic2U Design System.**

[![GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-222?style=flat-square&logo=github)](https://healthearth.github.io/Magic2U-Design-System)
[![Deploy](https://img.shields.io/badge/workflow-deploy--pages-3BFFC8?style=flat-square)](./.github/workflows/deploy-pages.yml)

[← Back to Root](../README.md)

</div>

---

## Overview

The `public/` directory serves two purposes:

1. **Static assets** — brand files (logo, favicon, icons) consumed by apps and the deployed site
2. **Generated metrics output** — JSON and HTML files produced by the `pnpm metrics` pipeline, which are deployed to GitHub Pages via the `deploy-pages.yml` workflow on every push to `main`

This directory is the **publish target** for GitHub Pages. When the deployment workflow runs, the contents of `public/` are pushed to the `gh-pages` branch and served at the project's GitHub Pages URL.

---

## Directory Structure

```
public/
├── index.html               # GitHub Pages root — live showcase entry point
├── favicon.ico              # Magic2U favicon (32×32, ICO format)
├── logo.svg                 # Magic2U brand logo (scalable SVG)
├── metrics/
│   ├── adoption.json        # Component adoption data by team
│   ├── performance.json     # Render performance benchmarks
│   ├── a11y-scores.json     # Accessibility scores by component
│   └── savings.json         # Engineering savings calculations
├── assets/
│   ├── icons/               # Icon assets (SVG)
│   └── images/              # Illustration and marketing assets
└── README.md                # This file
```

---

## Static Assets

### `logo.svg` — Brand Logo

The Magic2U brand logo in scalable SVG format. Use this for:
- Application headers and navigation
- Documentation and README headers
- Marketing and presentation materials
- GitHub profile and README badges

```html
<!-- Recommended usage -->
<img src="/logo.svg" alt="Magic2U Design System" width="72" height="72" />
```

```markdown
<!-- In a README -->
<img src="public/logo.svg" alt="Magic2U Logo" width="72" />
```

### `favicon.ico` — Browser Favicon

32×32 ICO format favicon. Already configured in `apps/demo-app/public/` and referenced in the deployed `index.html`.

---

## Generated Metrics Output

The `pnpm metrics` script (triggered by the `deploy-pages.yml` workflow) generates fresh JSON files on every push to `main`. These files are the data source for the live enterprise metrics dashboard.

### `metrics/adoption.json`

Tracks which teams are using which components, and at what coverage percentage.

```json
{
  "generated": "2025-01-15T12:00:00Z",
  "teams": {
    "platform":       { "coverage": 0.97, "components": 24, "total": 24 },
    "consumer-web":   { "coverage": 0.84, "components": 20, "total": 24 },
    "mobile":         { "coverage": 0.61, "components": 15, "total": 24 },
    "internal-tools": { "coverage": 0.48, "components": 11, "total": 24 },
    "partner-portal": { "coverage": 0.23, "components":  6, "total": 24 }
  }
}
```

### `metrics/performance.json`

Component render time benchmarks from CI. Flags any component that regresses beyond the performance budget.

```json
{
  "generated": "2025-01-15T12:00:00Z",
  "budget_ms": 16,
  "components": {
    "Button":    { "avg_ms": 12, "p95_ms": 14, "status": "pass" },
    "StatCard":  { "avg_ms": 8,  "p95_ms": 11, "status": "pass" },
    "Table":     { "avg_ms": 22, "p95_ms": 28, "status": "warn" },
    "Modal":     { "avg_ms": 5,  "p95_ms": 7,  "status": "pass" }
  }
}
```

### `metrics/a11y-scores.json`

Accessibility audit results per component, sourced from the automated `pnpm test --filter accessibility` step.

```json
{
  "generated": "2025-01-15T12:00:00Z",
  "wcag_target": "AA",
  "overall_score": 94,
  "components": {
    "Button":   { "score": 100, "violations": [] },
    "Input":    { "score": 98,  "violations": ["missing-label-on-placeholder-only input"] },
    "Modal":    { "score": 96,  "violations": [] },
    "Table":    { "score": 88,  "violations": ["missing-caption", "missing-scope-attrs"] }
  }
}
```

### `metrics/savings.json`

ROI calculations based on component adoption data.

```json
{
  "generated": "2025-01-15T12:00:00Z",
  "members": 51000000,
  "estimated_digital_users": 32000000,
  "estimated_hours_saved": 240000,
  "avg_engineer_hourly_rate_usd": 75,
  "estimated_savings_usd": 7200000,
  "components_shipped_without_ds": 142,
  "components_shipped_with_ds": 24,
  "duplication_ratio_reduction": 0.83
}
```

---

## GitHub Pages Deployment

The `deploy-pages.yml` workflow publishes this directory automatically on every push to `main`.

### Deployment Pipeline

```
push to main
     │
     ▼
pnpm install
     │
     ▼
pnpm metrics  ──→  generates JSON files into public/metrics/
     │
     ▼
peaceiris/actions-gh-pages
     │
     ▼
public/ contents → gh-pages branch → GitHub Pages URL
```

### Deployed URL

```
https://healthearth.github.io/Magic2U-Design-System
```

### Manual Trigger

If you need to force a re-deploy without a code change:

```bash
# From GitHub Actions → deploy-pages workflow → "Run workflow"
# Or push an empty commit:
git commit --allow-empty -m "chore: trigger pages deploy"
git push
```

---

## Adding New Assets

When adding new static assets to `public/`:

1. **Images** → Place in `public/assets/images/`
2. **Icons** → Place in `public/assets/icons/` as `.svg` files
3. **Generated data** → Add generation logic to the `metrics` script and document the JSON schema here
4. **Fonts** → Self-hosted fonts go in `public/assets/fonts/` and must be referenced in `globals.css`

> Keep assets optimized: SVGs should be minified, PNGs should be compressed. Images > 100KB must be justified in the PR description.

---

## Related

- [`../.github/workflows/deploy-pages.yml`](../.github/README.md) — The workflow that deploys this directory
- [`../apps/demo-app/public/`](../apps/README.md) — App-level public assets (favicon, logo, mock-data)
- [`../packages/tokens/dist/`](../packages/README.md) — Token CSS/JS files referenced by the deployed site
