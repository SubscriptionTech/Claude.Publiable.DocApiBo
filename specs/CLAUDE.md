# specs/ — Website Specification

This folder contains the full requirements for the **API Backoffice documentation website**.

Its purpose is to give a language model (such as Claude Code) everything it needs to implement the website from scratch, without any prior context.

Never modify files in this folder unless the user explicitly asks to update the website specification.

## How to use this folder

Before implementing any part of the site, read the sections below in order, then consult the relevant files they link to.

## Shared base specifications (DocApi)

All ProAbono API documentation websites share a common foundation. Read the DocApi specifications first — they define the base design, stack, pipeline architecture, and implementation patterns.

Shared spec root: [`shared/DocApi/`](../shared/DocApi/)

## Design — overrides

[design/](design/) contains design specifications that override the shared DocApi design for this particular website.

See [design/CLAUDE.md](design/CLAUDE.md) for the full file list.

## 1. Functional — what to build

[functional/](functional/) describes the website from the user's perspective: what pages exist, what they contain, what the navigation looks like, and what the visual design is. Stack-agnostic.

See [functional/CLAUDE.md](functional/CLAUDE.md) for the full file list.

## 2. Pipeline — how content flows in

[pipeline/](pipeline/) describes the processes that feed the site with content from the OpenAPI spec.

See [pipeline/CLAUDE.md](pipeline/CLAUDE.md) for the full file list.

## 3. Technical — how it is implemented

[technical/](technical/) describes the technical choices: framework, plugin configuration, build commands, deployment.

See [technical/CLAUDE.md](technical/CLAUDE.md) for the full file list.
