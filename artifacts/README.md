# Magic2U artifact inventory

This directory preserves the material used to consolidate `magic2u.org`.
The newest complete archive was promoted to the repository root so the project
can be installed and tested without digging through ZIP files.

## Preserved artifacts

- `source-archives/` contains 13 byte-unique snapshots downloaded between
  February 15 and February 18, 2026, ordered from `v01` through `v13`.
- `showcase/magic2u-design-system-showcase.html` preserves the standalone
  showcase export.
- `v13-Magic2U-Design-System-main(14).zip` is the 203-file baseline currently
  expanded at the repository root.

## Duplicate handling

Three downloaded archives were not copied a second time because their SHA-256
hashes were identical to preserved versions:

| Duplicate download | Preserved equivalent |
| --- | --- |
| `Magic2U-Design-System-main(5).zip` | `v05-Magic2U-Design-System-main(4).zip` |
| `Magic2U-Design-System-main(7).zip` | `v06-Magic2U-Design-System-main(6).zip` |
| `Magic2U-Design-System-main(9).zip` | `v08-Magic2U-Design-System-main (2).zip` |

The second showcase download was also byte-identical and is represented by the
single preserved HTML file.

## Safety

The promoted source was scanned for common credential patterns. The archived
`.env` file is empty, and `.env*` files remain excluded from Git. Variable names
such as `OPENAI_API_KEY`, `GITHUB_TOKEN`, and `NPM_TOKEN` are documentation or
runtime references; no credential values are included in the working tree.

