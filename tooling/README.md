<div align="center">

# `tooling/`

**Internal developer tooling — the build pipeline, linting standards, and TypeScript configurations that power the entire monorepo.**

[![Style Dictionary](https://img.shields.io/badge/Style%20Dictionary-3.x-3BFFC8?style=flat-square)](https://amzn.github.io/style-dictionary/)
[![ESLint](https://img.shields.io/badge/ESLint-shared%20config-4B32C3?style=flat-square&logo=eslint)](https://eslint.org/)
[![TypeScript](https://img.shields.io/badge/tsconfig-shared-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

[← Back to Root](../README.md)

</div>

---

## Overview

The `tooling/` directory contains **zero production-shipped code**. Nothing here goes to npm. Everything here exists to make the development and build experience across the monorepo consistent, fast, and governed.

This is the infrastructure that ensures the token pipeline runs correctly, every package uses the same lint rules, and TypeScript is configured identically no matter which workspace you're working in.

---

## Tools

### `tooling/style-dictionary/` — Token Transformation Pipeline

[Style Dictionary](https://amzn.github.io/style-dictionary/) is the engine that converts the raw token JSON in `packages/tokens/src/tokens.json` into the platform-specific outputs that components and apps actually consume.

```
tooling/style-dictionary/
├── config.js            # Style Dictionary build configuration
├── transforms/
│   ├── px-to-rem.js     # Custom transform: px values → rem
│   └── color-alpha.js   # Custom transform: hex → rgba with alpha
├── formats/
│   └── ts-constants.js  # Custom format: outputs typed TS constants
└── build.js             # Entry point: runs all platform builds
```

#### How It Works

```
packages/tokens/src/tokens.json
         │
         ▼
   Style Dictionary
         │
    ┌────┴─────────────────────────────────┐
    │                                      │
    ▼                                      ▼
packages/tokens/dist/tokens.css     packages/tokens/dist/tokens.js
(CSS custom properties)             (TypeScript constants)
```

#### Running the Token Build

```bash
# Build tokens from root
pnpm --filter tokens build

# Or run Style Dictionary directly
cd tooling/style-dictionary
node build.js
```

#### Adding a New Token

1. Add the token to `packages/tokens/src/tokens.json` following the existing schema
2. Run `pnpm --filter tokens build`
3. Verify the output appears in `packages/tokens/dist/tokens.css` and `tokens.js`
4. Create a changeset: `pnpm changeset` (minor bump for new tokens)

#### Supported Output Platforms

| Platform | Output File | Consumer |
|----------|-------------|---------|
| CSS | `dist/tokens.css` | Web components, apps |
| JavaScript | `dist/tokens.js` | React components, hooks |
| JSON | `dist/tokens.json` | Figma plugins, native apps |

---

### `tooling/eslint-config/` — Shared ESLint Configuration

A single ESLint config that every package and app extends. This guarantees that code style, accessibility lint rules, and import discipline are identical across all workspaces — you cannot accidentally ship code that passes lint in one package but would fail in another.

```
tooling/eslint-config/
├── index.js             # Base config for all packages
├── react.js             # React + hooks rules (extends index)
├── node.js              # Node-only config (for tooling scripts)
└── package.json
```

#### What's Enforced

| Rule Category | Details |
|--------------|---------|
| **Accessibility** | `jsx-a11y` — all interactive elements must have ARIA labels, roles, keyboard support |
| **React** | Hooks rules, exhaustive deps, no direct DOM manipulation |
| **Imports** | No circular deps, no relative imports crossing package boundaries |
| **TypeScript** | No `any`, explicit return types on exported functions, strict null checks |
| **Design System** | No hardcoded hex values in component files (must use token variables) |

#### Extending in a Package

```js
// packages/ui/.eslintrc.js
module.exports = {
  extends: ['magic2u-eslint-config/react'],
  rules: {
    // Package-specific overrides only
  }
};
```

#### Running Lint

```bash
# Lint entire monorepo
pnpm lint

# Lint a single package
pnpm --filter @magic2u/ui lint

# Auto-fix
pnpm lint --fix
```

---

### `tooling/tsconfig/` — Shared TypeScript Configurations

Base TypeScript configurations that every package extends. This ensures all packages compile with the same strict settings, target the same ES version, and produce compatible output.

```
tooling/tsconfig/
├── base.json            # Strict TypeScript base (target: ES2022)
├── react.json           # React + JSX settings (extends base)
├── node.json            # Node tooling settings (extends base)
└── package.json
```

#### Base Config (`base.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitAny": true,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  }
}
```

#### Extending in a Package

```json
// packages/ui/tsconfig.json
{
  "extends": "magic2u-tsconfig/react",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

---

## Running All Tooling

From the monorepo root, the following workspace-level scripts invoke the tooling across all packages:

```bash
# Build all packages (runs token pipeline first, then components)
pnpm build

# Lint all packages with shared ESLint config
pnpm lint

# Type-check all packages with shared tsconfig
pnpm typecheck

# Run all tests across all packages
pnpm test
```

---

## Adding New Tooling

If you need to add a new shared tool (e.g., a shared Prettier config, a Vitest preset):

1. Create a new directory under `tooling/`
2. Add a `package.json` with `"name": "magic2u-<tool-name>"`
3. It will be automatically picked up by the pnpm workspace glob
4. Add it as a `devDependency` to the packages that need it
5. Document it in this README

---

## Related

- [`../packages/tokens/`](../packages/README.md) — The token source that Style Dictionary transforms
- [`../.github/workflows/`](../.github/README.md) — CI runs lint, typecheck, and build using this tooling
- [`../.changeset/`](../.changeset/README.md) — Tooling packages follow the same versioning process
