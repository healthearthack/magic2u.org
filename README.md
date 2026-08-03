# Magic2U

Magic2U is a consolidated design-system laboratory: reusable React components, design tokens, themes, accessibility experiments, a demo application, and the historical artifacts that produced them.

This repository is a recovery and stabilization workspace—not a claim that every artifact is production-ready. Its first job is to preserve the useful work in one searchable, buildable home. Its next job is to turn the strongest pieces into a small, documented system.

## What works today

| Area | Status | Notes |
| --- | --- | --- |
| Demo application | Buildable | Vite/React application in `apps/demo-app` |
| UI package | Buildable | TypeScript component library in `packages/ui` |
| Workspace build | Passing | `pnpm build` builds the library and demo |
| Tokens and themes | Experimental | Useful source material; APIs may change |
| Accessibility and analytics work | Experimental | Requires review and integration tests |
| Fairy/worker prototypes | Research | Some experiments require an OpenAI API key; not production services |
| Historical archives | Preserved | Indexed under `artifacts/`; duplicates were removed by content hash |

## Quick start

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm build
pnpm --filter demo-app dev
```

The development server prints its local URL. The root build compiles `packages/ui` first and then the demo application.

## Repository map

```text
apps/
  demo-app/          Runnable component and theme demonstration
packages/
  ui/                Reusable React/TypeScript components
artifacts/           Deduplicated historical archives and manifest
docs/                Design, accessibility, and implementation notes
examples/            Earlier demonstrations and integration experiments
workers/             Experimental service and AI-assisted prototypes
```

Several directories intentionally remain as artifacts rather than active packages. Preservation does not imply endorsement: code should graduate into `packages/` only after it has an owner, documentation, tests, and a clear consumer.

## Artifact recovery

`artifacts/manifest.csv` records the recovered archive inventory, including source paths, hashes, sizes, and duplicate relationships. Archives with identical content are stored once. This keeps the history available without pretending every ZIP belongs in the active product surface.

When evaluating an artifact:

1. Confirm that it solves a current use case.
2. Compare it with the active UI package and remove duplication.
3. Add a focused example and automated test.
4. Document accessibility behavior and expected API stability.
5. Promote it into an active package only after review.

## Design principles

- Accessible behavior is part of the component contract.
- Tokens should express intent, not one-off visual values.
- A small dependable component set is more valuable than a large undocumented one.
- Examples must run; claims must be verifiable.
- Historical work stays searchable without crowding the supported API.

## Configuration and secrets

The core component library and demo do not require external credentials. AI-related experiments may read `OPENAI_API_KEY` from a local environment file. Never commit API keys, credentials, customer data, or generated secret files. Copy an example environment file when one is provided and keep the real values local.

## Near-term roadmap

- Reduce the supported component surface to the strongest primitives.
- Define one canonical token schema and theme contract.
- Add visual, accessibility, and interaction tests.
- Publish Storybook-style documentation or an equivalent component catalog.
- Separate archival experiments from maintained packages more sharply.
- Establish versioning and release automation only after the public API stabilizes.

## Contributing

Keep changes narrow and demonstrable. For a component change, include the component source, a runnable example, relevant tests, and an accessibility note. Run the workspace build before opening a pull request:

```bash
pnpm build
```

If you are restoring an older artifact, preserve its provenance in the manifest and avoid overwriting a newer implementation without comparison.

## Project status

Magic2U is an active consolidation project. Expect refactoring and breaking changes while the supported surface is defined. Issues and pull requests should distinguish between active product code, research prototypes, and archival material.

## License

Licensed under the Apache License 2.0. See [`LICENSE`](LICENSE).
