<div align="center">

# `apps/`

**Deployable applications that consume and showcase the Magic2U Design System in production contexts.**

[![Demo App](https://img.shields.io/badge/demo--app-Vite%205%20%2B%20React%2018-3BFFC8?style=flat-square)](./demo-app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

[← Back to Root](../README.md)

</div>

---

## Overview

The `apps/` directory contains the runnable, deployable applications that live in this monorepo. These are not published npm packages — they are end-user-facing products that **consume** the packages from `../packages/` and serve as living proof that the design system works at real scale.

Each app in this directory is independently deployable, has its own `package.json`, and is integrated into the root pnpm workspace.

---

## Applications

### `demo-app/` — Enterprise Impact Dashboard

The flagship demonstration application. It is a React 18 + Vite 5 + TypeScript application that renders the **Enterprise Impact Dashboard** — a real metrics interface built entirely from Magic2U Design System components.

```
demo-app/
├── public/
│   ├── favicon.ico          # Magic2U favicon
│   ├── logo.svg             # Brand logo (SVG, scalable)
│   └── mock-data.json       # Enterprise metrics data (UnitedHealthcare scale)
├── src/
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # Entry point — mounts React root
│   ├── styles/
│   │   └── globals.css      # Global CSS reset and base styles
│   ├── components/
│   │   ├── EnterpriseDashboard.tsx   # Top-level dashboard layout
│   │   └── StatCard.tsx              # Metric card component (typed)
│   ├── features/
│   │   └── dashboard/
│   │       ├── DashboardPage.tsx     # Page-level composition
│   │       ├── CompanyOverview.tsx   # Header / intro section
│   │       └── MetricsPanel.tsx      # Grid of StatCards
│   ├── hooks/
│   │   ├── useMetrics.ts    # Fetches and shapes mock-data.json
│   │   └── useTelemetry.ts  # Component event tracking hook
│   └── pages/
│       ├── HomePage.tsx     # Landing page (in progress)
│       └── EnterprisePage.tsx  # Enterprise rollout strategy view
└── package.json
```

#### Key Files Explained

| File | Purpose |
|------|---------|
| `mock-data.json` | Drives all dashboard metrics. Contains real-scale UnitedHealthcare data: 51M members, 32M digital users, 240K hours saved, $7.2M savings |
| `EnterpriseDashboard.tsx` | Fetches `mock-data.json` and renders the 2×2 metric grid using `MetricsCard` |
| `StatCard.tsx` | Reusable typed metric card: accepts `label: string` and `value: string` props |
| `useMetrics.ts` | Custom hook that fetches `/mock-data.json` and returns a typed data object |
| `useTelemetry.ts` | Custom hook that wraps `logEvent()` for component event tracking |
| `DashboardPage.tsx` | Composes `CompanyOverview` + `MetricsPanel` into a page |

#### Live Data Shape

```json
{
  "company": "UnitedHealthcare",
  "members": 51000000,
  "estimatedDigitalUsers": 32000000,
  "estimatedTimeSavedHours": 240000,
  "estimatedEngineeringSavingsUSD": 7200000
}
```

---

## Running the Demo App

```bash
# From the monorepo root
pnpm --filter demo-app dev

# Or navigate directly
cd apps/demo-app
pnpm dev
```

| Command | Action |
|---------|--------|
| `pnpm dev` | Start Vite dev server at `http://localhost:5173` |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Preview production build locally |

---

## Architecture Decisions

### Why Vite?
Vite 5 provides near-instant HMR and a zero-config TypeScript + React setup. For a design system demo app where developers need to iterate quickly on component compositions, this is the right tool.

### Why separate `features/` and `components/`?
Following feature-sliced design principles: `components/` holds atomic, reusable pieces (`StatCard`). `features/` holds domain-grouped compositions (`dashboard/MetricsPanel`, `dashboard/DashboardPage`). This mirrors how a real enterprise app consuming the design system would be structured.

### Why mock data in `public/`?
Placing `mock-data.json` in `public/` means it is served statically and fetched at runtime by `useMetrics`. This mirrors a real API call pattern — the hook structure is production-ready and only the data source needs to swap out.

---

## Adding a New App

To add another application to the monorepo (e.g., a Storybook site, a docs portal, a consumer-facing portal):

```bash
# 1. Create the directory
mkdir apps/my-new-app

# 2. Initialize with a package.json
cd apps/my-new-app && pnpm init

# 3. Add it to the pnpm workspace
# In pnpm-workspace.yaml (root):
# packages:
#   - 'apps/*'     ← already covered by this glob
#   - 'packages/*'

# 4. Install design system packages
pnpm add magic2u-design-system
```

---

## Related

- [`../packages/`](../packages/README.md) — The UI, token, and web component packages this app consumes
- [`../public/`](../public/README.md) — Static assets and generated metrics output
- [`../.github/workflows/`](../.github/README.md) — CI/CD pipelines that build and deploy these apps
