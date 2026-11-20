# Technical Specification

This folder describes the technical choices and implementation details for the **API Backoffice documentation website**.

It contains everything that would change if the stack were replaced: framework selection, package configuration, build commands, deployment platform, and CI/CD pipeline.

## Shared DocApi files (read first)

See [`shared/DocApi/technical/index.md`](../../shared/DocApi/technical/index.md) for the full list of shared technical specifications.

## Project overrides

### OpenAPI spec version in `specPath`

The `specPath` of the `docusaurus-plugin-openapi-docs` plugin, in `website/docusaurus.config.js`, points to the current version of the OpenAPI spec. That version is the current file version of the OpenAPI spec, whose definition also describes how the file name is built from it.

A new version of the OpenAPI spec is a new file, and the previous files stay in the submodule, so `specPath` does not move to a new version on its own. Before regenerating the API reference, compare the version in `specPath` with the current file version. When they differ, ask the user before pointing `specPath` at the new file.

### Deployment domain

The website is deployed on `ref-api-bo.proabono.com`, set as `url` in `website/docusaurus.config.js`. In the ConsentAnalytics shared utility, it is one of the API reference websites, of identifier `api_reference`.

### Cookie consent

The website carries the cookie consent of the ConsentAnalytics shared utility, as the shared DocApi technical design specifies, with these differences, since the website keeps the Docusaurus classic footer and its own typefaces:

- **The script.** `headTags` in `website/docusaurus.config.js` places the snippet of the ConsentAnalytics integration method in the `<head>` of every page: a `preconnect` to `https://docs.proabono.com`, then the stylesheet and the script of `https://docs.proabono.com/shared/pa/v1/`, the script with `defer` and `data-pa-site="api_reference"`, and never `data-pa-chat`.
- **The consent link.** The classic footer carries one link item, written as raw HTML: `<a class="footer__link-item" href="#" data-cc="show-preferencesModal">Manage my consents</a>`. The script binds only the `data-cc` links present when it starts, and Docusaurus changes pages without reloading, so the client module `website/src/clientModules/consentLink.js` listens to clicks on the document: on such a link, unless the click was already handled (`defaultPrevented`), it prevents following `#` and opens the preferences through `window.paAnalytics?.showPreferences()`. Without the script, the link does nothing.
- **The typefaces.** Inter (weights 400, 500, 600, 700) and JetBrains Mono (400) are served by the site itself, from the npm packages `@fontsource/inter` and `@fontsource/jetbrains-mono`, pinned in `website/package.json`. `docusaurus.config.js` places one stylesheet per weight before `custom.css` in `customCss`, each resolved to an absolute path. Nothing is loaded from Google Fonts: it would send the visitor's IP address to Google before the cookie choice.
- **No other third party.** No analytics or advertising tag is configured, and no page embeds third-party content. A third-party content added later follows the ConsentAnalytics integration method.

## Related

- [../functional/](../functional/) — What the site shows to the user
- [../pipeline/](../pipeline/) — How content from the OpenAPI spec flows into the site
