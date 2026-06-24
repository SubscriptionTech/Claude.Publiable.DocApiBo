# Website Description

This folder contains the requirements and specifications for the **API Backoffice documentation website**.

Its purpose is to give a language model (such as Claude Code) everything it needs to implement the website from scratch, without any prior context.

## How to use this folder

Read this file first, then follow the links below in order.

## Shared base specifications (DocApi)

All ProAbono API documentation websites share a common foundation. Read the DocApi specifications first — they define the base design, stack, pipeline architecture, and implementation patterns.

Shared spec root: [`shared/DocApi/`](../shared/DocApi/)

## 1. Functional — what to build

[functional/](functional/) describes the website from the user's perspective: what pages exist, what they contain, what the navigation looks like, and what the visual design is. Stack-agnostic.

See [functional/index.md](functional/index.md) for the full file list.

## 2. Pipeline — how content flows in

[pipeline/](pipeline/) describes the processes that feed the site with content from the OpenAPI spec.

See [pipeline/index.md](pipeline/index.md) for the full file list.

## 3. Technical — how it is implemented

[technical/](technical/) describes the technical choices: framework, plugin configuration, build commands, deployment.

See [technical/index.md](technical/index.md) for the full file list.
