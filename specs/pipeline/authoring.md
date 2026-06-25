# Authoring Pipeline

How non-API-reference content is sourced from the shared/ProAbonoBO specs.

## Authored sections

The following sections are hand-written directly in this repo:

| Section | Source |
|---------|--------|
| Introduction | Authored in this repo |
| Authentication | Authored in this repo |
| Concepts | Authored in this repo |
| Guides | Authored in this repo |

## Source files

The following files in `shared/ProAbonoBO` are referenced when authoring but are not consumed by the generation tool:

| File | Used for |
|------|----------|
| `shared/ProAbonoBO/resources/` | Source markdown — used for authoring and kept in sync with the spec |
| `shared/ProAbonoBO/specs/` | Authoring conventions — internal use only |
| `shared/ProAbonoBO/specs/enum.md` | Authoring Concepts pages |
| `shared/ProAbonoBO/specs/convention.md` | Authoring Authentication pages |
| `shared/ProAbonoBO/specs/actions.md` | Cross-resource flows — authoring Guides |
