# Magic2U Design-System Platform

Magic2U turns approved brand decisions into accessible, portable design tokens and production outputs. The public Studio is the fast entry point; the same configuration feeds a deeper architecture for engineering, mobile, print, merchandise, and campaign work.

Production: [magic2u.org](https://magic2u.org)

## What the product does

- Configures brand color, accent, typography, spacing, radius, appearance, and output target.
- Calculates the actual foreground/background contrast ratio.
- Previews decisions against a working product interface.
- Organizes values into foundation, semantic, component, and output layers.
- Exports Design Tokens Community Group-style JavaScript Object Notation and Cascading Style Sheets variables.
- Saves a working system locally without requiring an account.
- Explains a practical discovery, definition, and deployment path for adoption.

## Product model

| Offering | Customer value | Business role |
| --- | --- | --- |
| Studio | Configure, validate, and export a local system | Free adoption funnel |
| Team system | Multi-brand architecture, repository integration, and documentation | Implementation engagement |
| Managed platform | Governance, releases, audits, and custom output compilers | Recurring organizational service |

Magic2U does not maintain a second design system in the profile-site repository. The former `healthearthack.github.io` design-system concepts were evaluated and consolidated here. That repository can return to its role as Andrew Kieckhefer's profile and project index.

## Supported architecture

```text
Brand foundations
      ↓
Semantic roles
      ↓
Component contracts
      ↓
Web · mobile · print · campaign outputs
```

The canonical compiler lives in `apps/studio/src/tokenEngine.ts`. It generates the product's portable token registry and Cascading Style Sheets output from one configuration object.

## Local development

Requirements: Node.js 22 and pnpm 11.16.0.

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm --filter @magic2u/studio dev
```

## Production deployment

Every push to `main` runs Continuous Integration on GitHub. Cloudflare then builds and deploys the Worker-backed static application using:

```text
Build command: pnpm run build
Deploy command: npx wrangler deploy
Assets: apps/studio/dist
```

The custom domains `magic2u.org` and `www.magic2u.org` stay attached to the Worker while deployments advance through version history.

## Scope and provenance

The active product is `apps/studio`; `packages/ui` remains the component-library foundation. Concepts merged from the earlier archive include target-aware compilation, structured adoption, governance framing, multi-channel outputs, and token-layer education. Third-party brand imitations and unmeasured accessibility claims were intentionally excluded.

## License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE).
