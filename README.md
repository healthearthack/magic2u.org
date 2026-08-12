# Magic2U Brand System Studio

Magic2U turns a small set of brand decisions into an accessible interface foundation. The studio lets a user choose a name, primary color, corner radius, and appearance; preview those decisions against a realistic product interface; save the project locally; and export reusable design tokens.

## Product features

- Live brand and component preview
- Four editable starting presets
- Light and dark appearance modes
- Automatic readable text-color selection
- Web Content Accessibility Guidelines contrast measurement
- Local project persistence with no account
- JavaScript Object Notation token export
- Responsive desktop and mobile layouts
- Keyboard focus and reduced-motion support

## Run locally

Requirements: Node.js 20 or newer and pnpm 8 or newer.

```bash
pnpm install
pnpm build
pnpm --filter demo-app dev
```

Open the local address printed by Vite. No application programming interface key, database, or hosted service is required.

## Production build

```bash
pnpm build
pnpm --filter demo-app preview
```

The deployable static site is generated in `apps/demo-app/dist`. It can be hosted on GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static web server.

## Active project structure

```text
apps/demo-app/     Supported Magic2U product
packages/ui/       Reusable component-library foundation
docs/              Design and engineering documentation
artifacts/         Preserved historical source material
workers/           Unsupported research prototypes
```

Only `apps/demo-app` and `packages/ui` participate in the supported workspace build. The other directories preserve earlier research and are not required to run the product.

## Export format

The studio exports a `.json` token file containing brand metadata, primary and on-primary colors, surface color, component radii, and appearance mode. JavaScript Object Notation is abbreviated as JSON.

## Privacy and configuration

Projects are stored in the browser's local storage and are never transmitted by the application. Magic2U does not require credentials. Experimental worker code may mention external services, but it is not imported by the supported product.

## License

Licensed under the Apache License 2.0. See [LICENSE](LICENSE).
