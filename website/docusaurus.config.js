// @ts-check
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import {themes as prismThemes} from 'prism-react-renderer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// The typefaces are served by the site itself, never by Google Fonts: a request
// to a third party before the visitor's cookie choice is forbidden by the
// ConsentAnalytics shared utility. `customCss` resolves a relative path against
// the site, so each package stylesheet is resolved to an absolute path.
const fontStylesheets = [
  '@fontsource/inter/400.css',
  '@fontsource/inter/500.css',
  '@fontsource/inter/600.css',
  '@fontsource/inter/700.css',
  '@fontsource/jetbrains-mono/400.css',
].map((stylesheet) => require.resolve(stylesheet));

// Cookie consent shared by every ProAbono website (shared/ConsentAnalytics,
// integration.md § 2). Both files are loaded from docs.proabono.com, never
// copied. `api_reference` is the identifier of the API reference websites;
// there is never an Intercom chat here, so no `data-pa-chat`.
const consentOrigin = 'https://docs.proabono.com';
const consentBase = `${consentOrigin}/shared/pa/v1`;

// Docusaurus injects Prism theme colors as inline styles on every code block,
// which overrides any CSS variable declaration. The only way to control
// --prism-background-color from CSS is to make the JS theme object agree
// with the design tokens from the start.
const lightPrismTheme = {
  plain: { color: '#9CDCFE', backgroundColor: '#081f38' }, // matches --pad-background-sidebar (light)
  styles: prismThemes.vsDark.styles,
};
const darkPrismTheme = {
  plain: { color: '#9CDCFE', backgroundColor: '#1F2937' }, // matches --pad-background-sidebar (dark)
  styles: prismThemes.vsDark.styles,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Backoffice | Reference',
  tagline: 'ProAbono API documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ref-api-bo.proabono.com',
  baseUrl: '/',

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: consentOrigin },
    },
    {
      tagName: 'link',
      attributes: { rel: 'stylesheet', href: `${consentBase}/proabono-consent.css` },
    },
    {
      tagName: 'script',
      attributes: {
        src: `${consentBase}/proabono-consent.js`,
        defer: true,
        'data-pa-site': 'api_reference',
      },
    },
  ],

  clientModules: [path.join(__dirname, 'src/clientModules/consentLink.js')],

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
          customCss: [...fontStylesheets, './src/css/custom.css'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'API Backoffice | Reference',
        logo: {
          alt: 'ProAbono',
          src: 'img/logo.svg',
        },
        style: 'dark',
        items: [
          { type: 'search', position: 'right' },
          {
            href: 'https://github.com/SubscriptionTech/Claude.Publiable.DocApiBo',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // Reopens the cookie consent preferences (ConsentAnalytics,
            // integration.md § 3). The text is fixed by the utility.
            html: '<a class="footer__link-item" href="#" data-cc="show-preferencesModal">Manage my consents</a>',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProAbono`,
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
        theme: lightPrismTheme,
        darkTheme: darkPrismTheme,
        additionalLanguages: ['bash', 'json', 'http'],
      },
    }),
};

export default config;
