# Magic2U Product Architecture

## One product, two depths

Magic2U has one public product with two complementary experiences:

1. **Studio:** immediate configuration, preview, validation, local persistence, and export.
2. **Adoption system:** token architecture, governance, implementation sequence, and managed services.

The Studio is not a separate or competing design system. It is the interface into the same canonical configuration and compiler used by the deeper system.

## Token layers

| Layer | Purpose | Example |
| --- | --- | --- |
| Foundation | Store raw approved decisions | `color.brand.primary` |
| Semantic | Express why a value is used | `color.content.onPrimary` |
| Component | Define stable interface contracts | `button.primary.background` |
| Output | Deliver a consumer-specific artifact | `tokens.css` |

## Adoption workflow

```text
Discover → Define → Validate → Compile → Implement → Measure
```

- **Discover:** inventory actual inconsistency and select a high-value target.
- **Define:** approve foundations, semantic roles, owners, and exceptions.
- **Validate:** measure accessibility and verify output constraints.
- **Compile:** generate portable formats from the canonical registry.
- **Implement:** connect tokens to components and real product surfaces.
- **Measure:** track coverage, exceptions, and release adoption.

## Commercial boundary

The self-service Studio remains useful without a sales conversation. Paid value begins where organizational complexity begins: multi-brand mapping, migration, component integration, governance, managed releases, and specialized compilers.

## Deliberate exclusions

- Third-party brand replicas are not shipped as presets.
- Accessibility conformance is never declared without a measured contrast result.
- Marketing, merchandise, and video tokens do not form independent systems; they are output targets of the same system.
- Placeholder modules do not become supported features merely because they exist in an archive.
