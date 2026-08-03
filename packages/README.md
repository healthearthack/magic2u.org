<div align="center">

# `packages/`

**The published engine, versioned npm packages that form the Magic2U Design System's public API.**

[![Published](https://img.shields.io/badge/registry-npm%20(public)-CB3837?style=flat-square&logo=npm)](https://www.npmjs.com/)
[![Changesets](https://img.shields.io/badge/versioning-changesets-F1BE42?style=flat-square)](../.changeset/README.md)
[![Semver](https://img.shields.io/badge/semver-strict-3BFFC8?style=flat-square)](https://semver.org/)

[← Back to Root](../README.md)

</div>

---

## Overview

The `packages/` directory contains everything that ships to consumers — whether that is an internal product team, an enterprise integration partner, or an external adopter. Every package here is independently versioned via Changesets, published publicly to npm, and built against the design token system.

No application code lives here. No demo scaffolding. Only production-ready, consumer-facing library code.

---

## Package Inventory

### `packages/ui/` — React Component Library

The core React component library. Every component is:

- Written in TypeScript with full prop type exports
- Built against the token system (no hardcoded color or spacing values)
- Tested for WCAG 2.1 AA accessibility before merge
- Documented with Storybook stories
- Tree-shakeable (ESM output only)

```
packages/ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── StatCard/
│   │   ├── Table/
│   │   ├── Badge/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── index.ts          # Barrel export
│   ├── styles/
│   │   ├── reset.css         # CSS reset (normalize)
│   │   ├── base.css          # Token-based base styles
│   │   └── utilities.css     # Utility classes (spacing, layout)
│   └── index.ts              # Package entry point
├── package.json
└── tsconfig.json
```

#### Importing Components

```tsx
// Named imports (tree-shakeable)
import { Button, Card, StatCard, Table } from 'magic2u-design-system/ui/react';

// Styles (import once at app root)
import 'magic2u-design-system/ui/styles/reset.css';
import 'magic2u-design-system/ui/styles/base.css';
```

#### Component API — StatCard

```tsx
type StatCardProps = {
  label: string;          // Display label (e.g., "Members")
  value: string;          // Formatted value (e.g., "51M")
  delta?: string;         // Change indicator (e.g., "+3.2%")
  trend?: 'up' | 'down' | 'neutral';  // Controls color treatment
};
```

#### Component API — Button

```tsx
type ButtonProps = {
  variant?: 'primary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};
```

---

### `packages/tokens/` — Design Token System

The single source of truth for every visual constant in the system. Tokens are authored as JSON, transformed by Style Dictionary (in `../tooling/style-dictionary/`), and output as:

- **CSS custom properties** — for use in any web surface
- **JavaScript / TypeScript constants** — for use in component logic
- **JSON** — for consumption by Figma plugins and native platforms

```
packages/tokens/
├── src/
│   ├── tokens.json          # Base token definitions
│   ├── themes/
│   │   ├── dark.json        # Dark theme overrides
│   │   ├── light.json       # Light theme overrides
│   │   └── high-contrast.json
│   └── index.ts
├── dist/
│   ├── tokens.css           # CSS custom properties output
│   ├── tokens.js            # ESM JS constants output
│   └── tokens.json          # Resolved JSON output
└── package.json
```

#### Token Schema

```json
{
  "color": {
    "primary":   { "value": "#3BFFC8", "type": "color" },
    "accent":    { "value": "#63C4FF", "type": "color" },
    "danger":    { "value": "#FF4F6C", "type": "color" },
    "warn":      { "value": "#FFB830", "type": "color" },
    "bg":        { "value": "#050A12", "type": "color" },
    "surface":   { "value": "#0C1627", "type": "color" }
  },
  "spacing": {
    "xs": { "value": "4px",  "type": "spacing" },
    "sm": { "value": "8px",  "type": "spacing" },
    "md": { "value": "16px", "type": "spacing" },
    "lg": { "value": "24px", "type": "spacing" },
    "xl": { "value": "40px", "type": "spacing" }
  },
  "borderRadius": {
    "sm": { "value": "6px",  "type": "borderRadius" },
    "md": { "value": "12px", "type": "borderRadius" },
    "lg": { "value": "20px", "type": "borderRadius" }
  },
  "font": {
    "display": { "value": "'Syne', sans-serif", "type": "fontFamily" },
    "mono":    { "value": "'JetBrains Mono', monospace", "type": "fontFamily" },
    "body":    { "value": "'Inter', sans-serif", "type": "fontFamily" }
  }
}
```

#### Using CSS Tokens

```css
/* In your component styles */
.my-card {
  background: var(--color-surface);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  color: var(--text-primary);
}
```

#### Using JS Tokens

```ts
import { colorPrimary, spacingLg } from 'magic2u-design-system/tokens';

const style = {
  color: colorPrimary,      // '#3BFFC8'
  padding: spacingLg,       // '24px'
};
```

---

### `packages/web-components/` — Shadow DOM Components

Framework-agnostic Web Components built with Shadow DOM. These allow any technology stack — Vue, Angular, Svelte, legacy CMS, plain HTML — to consume Magic2U components without adopting React.

```
packages/web-components/
├── src/
│   ├── m2u-button.ts        # <m2u-button> custom element
│   ├── m2u-card.ts          # <m2u-card> custom element
│   ├── m2u-badge.ts         # <m2u-badge> custom element
│   └── index.ts
└── package.json
```

#### Usage (any HTML page)

```html
<script type="module" src="magic2u-design-system/web-components"></script>

<m2u-button variant="primary">Click Me</m2u-button>
<m2u-card>
  <m2u-badge type="success">Live</m2u-badge>
</m2u-card>
```

---

## Versioning

All packages are versioned independently using [Changesets](../.changeset/README.md). When a component changes, only the packages affected are bumped — not the entire monorepo.

```bash
# Before opening a PR that changes any package
pnpm changeset

# Releases are triggered automatically on push to main
# See ../.github/workflows/release.yml
```

| Version Type | When to Use |
|-------------|-------------|
| **patch** (0.0.x) | Bug fixes, non-breaking style tweaks |
| **minor** (0.x.0) | New components, new token values, new props |
| **major** (x.0.0) | Breaking API changes, token renames |

---

## Related

- [`../apps/`](../apps/README.md) — Applications that consume these packages
- [`../tooling/`](../tooling/README.md) — Build tooling that transforms tokens and bundles components
- [`../.changeset/`](../.changeset/README.md) — Versioning and release process
