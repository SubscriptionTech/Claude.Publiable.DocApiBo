// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const lightPrismTheme = {
  plain: {color: '#9CDCFE', backgroundColor: '#333'},
  styles: prismThemes.vsDark.styles,
};
const darkPrismTheme = {
  plain: {color: '#9CDCFE', backgroundColor: '#1F2937'},
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
    './plugins/docusaurus-pagefind',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'apidocs',
        docsPluginId: 'classic',
        config: {
          bo: {
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
        copyright: `Copyright © ${new Date().getFullYear()} ProAbono.`,
      },
      prism: {
        theme: lightPrismTheme,
        darkTheme: darkPrismTheme,
        additionalLanguages: ['bash', 'json', 'http', 'powershell', 'java', 'python', 'ruby', 'go', 'csharp'],
      },
      languageTabs: [
        {
          highlight: 'bash',
          language: 'curl',
          logoClass: 'bash',
          variants: ['curl'],
        },
        {
          highlight: 'javascript',
          language: 'javascript',
          logoClass: 'javascript',
          variants: ['fetch'],
        },
        {
          highlight: 'javascript',
          language: 'nodejs',
          logoClass: 'nodejs',
          variants: ['native'],
        },
        {
          highlight: 'python',
          language: 'python',
          logoClass: 'python',
          variants: ['requests'],
        },
        {
          highlight: 'csharp',
          language: 'csharp',
          logoClass: 'csharp',
          variants: ['RestSharp'],
        },
        {
          highlight: 'go',
          language: 'go',
          logoClass: 'go',
          variants: ['native'],
        },
        {
          highlight: 'java',
          language: 'java',
          logoClass: 'java',
          variants: ['unirest'],
        },
        {
          highlight: 'ruby',
          language: 'ruby',
          logoClass: 'ruby',
          variants: ['Net::HTTP'],
        },
        {
          highlight: 'http',
          language: 'http',
          logoClass: 'http',
          variants: [''],
        },
        {
          highlight: 'powershell',
          language: 'powershell',
          logoClass: 'powershell',
          variants: ['WebRequest'],
        },
      ],
    }),
};

export default config;
