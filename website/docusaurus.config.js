// @ts-check
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// The Front2026 typefaces, served by the site itself so that no page sends a
// request to a third party before the visitor's consent (DocApi technical
// design specification): Google Sans Flex 400–700, Google Sans Code 400 and
// 500. Absolute paths, since `customCss` resolves a path against the site.
const FONT_STYLESHEETS = [
  '@fontsource/google-sans-flex/400.css',
  '@fontsource/google-sans-flex/500.css',
  '@fontsource/google-sans-flex/600.css',
  '@fontsource/google-sans-flex/700.css',
  '@fontsource/google-sans-code/400.css',
  '@fontsource/google-sans-code/500.css',
].map((file) => require.resolve(file));

// The ProAbono cookie consent, shared by every ProAbono website and built by
// docs (ConsentAnalytics). Every DocApi website is an API reference website,
// whose identifier is `api_reference`; none carries the chat.
const CONSENT_ORIGIN = 'https://docs.proabono.com';
const CONSENT_SITE = 'api_reference';

// Docusaurus writes the colours of its Prism theme as inline styles on every
// code block. An empty theme writes none, so the colours of code come from
// the CSS alone: the code block fill and the DocApi code syntax tokens.
const prismTheme = { plain: {}, styles: [] };

// The address of the ProAbono back-office sign-in page, shared by every DocApi
// website (DocApi technical design specification).
const SIGN_IN_URL = 'https://via.proabono.com/Auth/Login';

// The ProAbono website, where the ProAbono mark leads (DocApi navigation).
const PROABONO_URL = 'https://www.proabono.com';

// Every ProAbono API documentation website, in order: the same list on every
// site.
const API_SITES = [
  { label: 'API Live', url: 'https://ref-api-live.proabono.com' },
  { label: 'API Backoffice', url: 'https://ref-api-bo.proabono.com' },
  // Hidden until the website exists.
  // { label: 'API Backoffice for platform', url: 'https://ref-api-platform.proabono.com' },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Backoffice | Reference',
  tagline: 'ProAbono API documentation',
  // The Front2026 mark, copied by `npm run gen-design`
  favicon: 'img/design/logo-mark.svg',

  // Values read by the swizzled theme components
  customFields: {
    // The sections of the site, in order (DocApi navigation specification):
    // the search facets. A section holds every doc
    // whose id starts with docIdPrefix. Adjust
    // the folder names to those of the site's docs.
    sections: [
      { label: 'Introduction', docIdPrefix: 'introduction/' },
      { label: 'Authentication', docIdPrefix: 'authentication/' },
      { label: 'Concepts', docIdPrefix: 'concepts/' },
      { label: 'API Reference', docIdPrefix: 'api-reference/' },
      { label: 'Guides', docIdPrefix: 'guides/' },
    ],
    signInUrl: SIGN_IN_URL,
    proabonoUrl: PROABONO_URL,
    apiSites: API_SITES,
    // The year in the footer's legal notice: the year the site is built
    buildYear: new Date().getFullYear(),
  },

  // The cookie consent, in the <head> of every page. A plain <script>
  // element, so that the script reads its own attributes as it runs.
  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: CONSENT_ORIGIN } },
    {
      tagName: 'link',
      attributes: { rel: 'stylesheet', href: `${CONSENT_ORIGIN}/shared/pa/v1/proabono-consent.css` },
    },
    {
      tagName: 'script',
      attributes: {
        src: `${CONSENT_ORIGIN}/shared/pa/v1/proabono-consent.js`,
        // headTags takes string values only: `defer="defer"` is the
        // boolean attribute
        defer: 'defer',
        'data-pa-site': CONSENT_SITE,
      },
    },
  ],

  future: {
    v4: true,
  },

  url: 'https://ref-api-bo.proabono.com',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  plugins: [
    path.join(__dirname, 'plugins/docusaurus-pagefind'),
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          api: {
            specPath: '../shared/ProAbonoBO/open-api/pa-bo-openapi-0.1.0.yaml',
            outputDir: 'docs/api-reference',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Serve docs at the site root (no /docs prefix). The Introduction
          // page carries `slug: /`, so it answers `/` directly.
          routeBasePath: '/',
          docItemComponent: '@theme/ApiItem',
          // Skips the auto-generated summary page (a hand-authored page is used instead)
          exclude: ['**/proabono-bo.info.mdx'],
        },
        blog: false,
        theme: {
          // The typefaces, the design tokens (generated by
          // `npm run gen-design`), the standard Front2026 components, the
          // site's own styles, the API reference
          customCss: [
            ...FONT_STYLESHEETS,
            './src/css/design-tokens.css',
            './src/css/standard.css',
            './src/css/custom.css',
            './src/css/api-reference.css',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        // The system preference is the default; the footer's theme toggle
        // overrides it (light, dark, or back to following the system)
        respectPrefersColorScheme: true,
      },
      // The top bar and the footer are rendered by the swizzled Navbar and
      // Footer components, which read customFields above
      navbar: {
        items: [],
      },
      // The table of contents lists the level-2 and level-3 headings
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      languageTabs: [
        { language: "curl" },
        { language: "python" },
        { language: "javascript" },
        { language: "nodejs" },
        { language: "php" },
        { language: "go" },
        { language: "java" },
        { language: "csharp" },
        { language: "ruby" },
        { language: "http" },
        { language: "powershell" },
      ],
      prism: {
        // No inline colours in either theme: see prismTheme above
        theme: prismTheme,
        darkTheme: prismTheme,
        additionalLanguages: ['bash', 'json', 'http'],
      },
    }),
};

export default config;
