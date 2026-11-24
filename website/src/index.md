# src/ — Custom Docusaurus Source Files

This folder contains all custom code for a DocApi-based website. The directory structure mirrors `website/src/` exactly — it lives inside `code/` so the entire `code/` tree can be merged into `website/` in a single operation.

The design is derived from the Front2026 design system; how is set out in the DocApi technical design specification (`technical/design.md`). Every value in these files is a design token: never write a colour or a size by hand.

## css/

`css/design-tokens.css` is not in this folder: `npm run gen-design` generates it in the website from the `shared/Front2026` submodule, with the icons and logos in `static/img/design/`. Both are committed in the website.

### [standard.css](css/standard.css)
The Front2026 standard components as global classes: `.f-icon`, `.f-button`, `.f-icon-button`, `.f-link`, `.f-search-field`, with their variant and size modifiers.

### [custom.css](css/custom.css)
The base (Infima mapped onto the tokens, `color-scheme`, the focus outline), the page template (top bar, navigation tree, table of contents, breadcrumb, previous/next cards, footer, dropdown), the article content, the callouts, the code blocks and the code syntax colours.

### [api-reference.css](css/api-reference.css)
The DocApi API reference components applied to the markup of `docusaurus-theme-openapi-docs`: method badges, endpoint line, parameter groups, tabs, code samples, and the panes of the operation pages.

## theme/

Swizzled Docusaurus theme components. These override the defaults of Docusaurus and of `docusaurus-theme-openapi-docs` without forking the packages.

### Page template
- [Navbar/index.jsx](theme/Navbar/index.jsx) — the top bar (Front2026 `AppBarWithSearch`) with the site title, and its panel below desktop.
- [DocRoot/Layout/index.jsx](theme/DocRoot/Layout/index.jsx) — the columns of the page template.
- [DocSidebar/](theme/DocSidebar/) and [DocSidebarItem/](theme/DocSidebarItem/) — the navigation tree (Front2026 `NavigationTree`), column form and panel form.
- [ApiItem/Layout/index.jsx](theme/ApiItem/Layout/index.jsx) — the page area of every doc page: breadcrumb, content, previous/next cards, table of contents; exposes the page's section to the search index.
- [TOC/index.jsx](theme/TOC/index.jsx) and [DocItem/TOC/Mobile/index.jsx](theme/DocItem/TOC/Mobile/index.jsx) — the table of contents, column form and band form.
- [DocBreadcrumbs/index.jsx](theme/DocBreadcrumbs/index.jsx) — the breadcrumb.
- [DocPaginator/index.jsx](theme/DocPaginator/index.jsx) — the previous and next cards.
- [Admonition/index.jsx](theme/Admonition/index.jsx) — the callouts.
- [Icon/Copy/index.jsx](theme/Icon/Copy/index.jsx), [Icon/Success/index.jsx](theme/Icon/Success/index.jsx) — the icons of the code block copy control.
- [Footer/index.jsx](theme/Footer/index.jsx) — the footer, with the theme toggle.

### API reference

### [ApiExplorer/index.tsx](theme/ApiExplorer/index.tsx)
Top-level swizzle of the OpenAPI explorer panel. Removes the interactive Request / Response tiles (the API does not support cross-domain calls — CORS), injects the first OpenAPI `example` value into the Postman body so code snippets are pre-populated, then renders `SecuritySchemes`, `CodeSnippets`, and `ApiExamples`.

### [ApiExplorer/ApiExamples/index.tsx](theme/ApiExplorer/ApiExamples/index.tsx)
Renders static Request and Response code blocks below the code-snippet panel. Extracts examples from the OpenAPI spec (`requestBody.content[*].example`, `requestBody.content[*].examples`, `responses[*].content[*].example`, etc.) and renders each as an `ApiCodeBlock`.

### [ApiExplorer/CodeTabs/index.jsx](theme/ApiExplorer/CodeTabs/index.jsx)
Swizzle of the code-language tab list. Replaces the default scrolling `<ul>` with a `<select>` dropdown — more compact and mobile-friendly. The CSS for the dropdown lives in `api-reference.css` under `.openapi-tabs__code-select`.

### [ApiExplorer/buildPostmanRequest.ts](theme/ApiExplorer/buildPostmanRequest.ts)
Swizzle of the Postman request builder. Adds one guard: when the Redux body state is `{ type: "empty" }` (the store's initial value before any user interaction) and the cloned Postman request already has a non-empty raw body (injected by `ApiExplorer/index.tsx`), the function returns early instead of clearing the body. Without this, the injected example is erased on first render.

### [ResponseExamples/index.js](theme/ResponseExamples/index.js)
Suppresses the schema-faker `ExampleFromSchema` component by returning `null`. The other named exports (`ResponseExample`, `ResponseExamples`) are re-exported from the original theme unchanged.

## components/

### Design components
- [Icon/index.jsx](components/Icon/index.jsx) — a Front2026 icon, drawn as a mask so that its colour comes from a token.
- [Dropdown/index.jsx](components/Dropdown/index.jsx) — the Front2026 `Dropdown`.
- [ThemeToggle/index.jsx](components/ThemeToggle/index.jsx) — the Front2026 `ThemeToggle`: light, dark, auto (follows the system).
- [Sections/index.js](components/Sections/index.js) — the sections of the site (`customFields.sections`): the search facets, and the section of a page.

### MDX components

Custom React components imported directly in MDX pages (not swizzled theme overrides).

### [OperationSnippets/index.jsx](components/OperationSnippets/index.jsx)
Generates multi-language code snippets for manually-authored MDX operation pages (i.e., pages that are not auto-generated from the OpenAPI spec). Accepts `method`, `path`, `baseUrl`, and `body` props, builds a Postman request, runs it through `postman-code-generators` for every language × variant configured in `docusaurus.config.js` `languageTabs`, and renders them inside the same `CodeTabs` select UI. Use this on concept or getting-started pages that describe an API call step by step.

### [StaticSnippets/index.jsx](components/StaticSnippets/index.jsx)
Renders hand-written code snippets (provided as a `snippets` prop: `{ [languageKey]: codeString }`) using the same `CodeTabs` select and `groupId="code-samples"` as `OperationSnippets`. The selected language stays in sync across all snippet blocks on the page. Use this when you want full control over the snippet content rather than auto-generation.

