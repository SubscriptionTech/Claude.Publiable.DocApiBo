# src/ — Custom Docusaurus Source Files

This folder contains all custom code for a DocApi-based website. The directory structure mirrors `website/src/` exactly — it lives inside `code/` so the entire `code/` tree can be merged into `website/` in a single operation.

## css/

### [custom.css](css/custom.css)
Global stylesheet for the entire site. Defines the `--pad-*` design token system (colors, typography, spacing) for both light and dark modes, maps them to Infima variables, and styles: navbar, sidebar, inline code, code blocks, tables, admonitions, breadcrumbs, OpenAPI explorer panels, and the Pagefind search dropdown. **This is the primary file to customize when rebranding for a new API.**

## pages/

### [index.js](pages/index.js)
Root page — immediately redirects to `/docs/introduction/`. Update the target path if the entry point of the new API's docs differs.

## theme/

Swizzled Docusaurus theme components. These override the defaults from `docusaurus-theme-openapi-docs` without forking the package.

### [ApiExplorer/index.tsx](theme/ApiExplorer/index.tsx)
Top-level swizzle of the OpenAPI explorer panel. Removes the interactive Request / Response tiles (the API does not support cross-domain calls — CORS), injects the first OpenAPI `example` value into the Postman body so code snippets are pre-populated, then renders `SecuritySchemes`, `CodeSnippets`, and `ApiExamples`.

### [ApiExplorer/ApiExamples/index.tsx](theme/ApiExplorer/ApiExamples/index.tsx)
Renders static Request and Response code blocks below the code-snippet panel. Extracts examples from the OpenAPI spec (`requestBody.content[*].example`, `requestBody.content[*].examples`, `responses[*].content[*].example`, etc.) and renders each as an `ApiCodeBlock`.

### [ApiExplorer/CodeTabs/index.jsx](theme/ApiExplorer/CodeTabs/index.jsx)
Swizzle of the code-language tab list. Replaces the default scrolling `<ul>` with a `<select>` dropdown — more compact and mobile-friendly. The CSS for the dropdown lives in `custom.css` under `.openapi-tabs__code-select`.

### [ApiExplorer/buildPostmanRequest.ts](theme/ApiExplorer/buildPostmanRequest.ts)
Swizzle of the Postman request builder. Adds one guard: when the Redux body state is `{ type: "empty" }` (the store's initial value before any user interaction) and the cloned Postman request already has a non-empty raw body (injected by `ApiExplorer/index.tsx`), the function returns early instead of clearing the body. Without this, the injected example is erased on first render.

### [ResponseExamples/index.js](theme/ResponseExamples/index.js)
Suppresses the schema-faker `ExampleFromSchema` component by returning `null`. The other named exports (`ResponseExample`, `ResponseExamples`) are re-exported from the original theme unchanged.

## components/

Custom React components imported directly in MDX pages (not swizzled theme overrides).

### [OperationSnippets/index.jsx](components/OperationSnippets/index.jsx)
Generates multi-language code snippets for manually-authored MDX operation pages (i.e., pages that are not auto-generated from the OpenAPI spec). Accepts `method`, `path`, `baseUrl`, and `body` props, builds a Postman request, runs it through `postman-code-generators` for every language × variant configured in `docusaurus.config.js` `languageTabs`, and renders them inside the same `CodeTabs` select UI. Use this on concept or getting-started pages that describe an API call step by step.

### [StaticSnippets/index.jsx](components/StaticSnippets/index.jsx)
Renders hand-written code snippets (provided as a `snippets` prop: `{ [languageKey]: codeString }`) using the same `CodeTabs` select and `groupId="code-samples"` as `OperationSnippets`. The selected language stays in sync across all snippet blocks on the page. Use this when you want full control over the snippet content rather than auto-generation.

