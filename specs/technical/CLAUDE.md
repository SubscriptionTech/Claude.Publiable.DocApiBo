# Technical Specification

This folder describes the technical choices and implementation details for the **API Backoffice documentation website**.

It contains everything that would change if the stack were replaced: framework selection, package configuration, build commands, deployment platform, and CI/CD pipeline.

## Shared DocApi files (read first)

See [`shared/DocApi/technical/index.md`](../../shared/DocApi/technical/index.md) for the full list of shared technical specifications.

## Project overrides

### OpenAPI spec version in `specPath`

The `specPath` of the `docusaurus-plugin-openapi-docs` plugin, in `website/docusaurus.config.js`, points to the current version of the OpenAPI spec. That version is the current file version of the OpenAPI spec, whose definition also describes how the file name is built from it.

A new version of the OpenAPI spec is a new file, and the previous files stay in the submodule, so `specPath` does not move to a new version on its own. Before regenerating the API reference, compare the version in `specPath` with the current file version. When they differ, ask the user before pointing `specPath` at the new file.

## Related

- [../functional/](../functional/) — What the site shows to the user
- [../pipeline/](../pipeline/) — How content from the OpenAPI spec flows into the site
