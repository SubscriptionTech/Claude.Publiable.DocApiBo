// @ts-check
import path from 'path';
import { fileURLToPath } from 'url';
import {themes as prismThemes} from 'prism-react-renderer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const lightPrismTheme = {
  plain: { color: '#9CDCFE', backgroundColor: '#333' },
  styles: prismThemes.vsDark.styles,
};
const darkPrismTheme = {
  plain: { color: '#9CDCFE', backgroundColor: '#1F2937' },
  styles: prismThemes.vsDark.styles,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Backoffice',
  tagline: 'ProAbono Back-Office API Reference',
  favicon: 'img/favicon.ico',
  url: 'https://your-site.azurestaticapps.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    path.join(__dirname, 'plugins/docusaurus-pagefind'),
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          proabono: {
            specPath: '../shared/ProAbonoBO/open-api/pa-bo-openapi-3.0.3.yaml',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: 'API Backoffice',
        logo: {
          alt: 'ProAbono',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'search', position: 'right'},
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
        copyright: `Copyright © ${new Date().getFullYear()} ProAbono`,
      },
      prism: {
        theme: lightPrismTheme,
        darkTheme: darkPrismTheme,
        additionalLanguages: ['bash', 'json', 'http'],
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
    }),
};

export default config;
