// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'George Eliot Archive',
  tagline: 'Reader',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cyux.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/GEreader/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CYux', // Usually your GitHub org/user name.
  projectName: 'GEreader', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath:'/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CYux/GEreader/tree/main',
            /* other docs plugin options */
          // docItemComponent: require.resolve('./src/pages/index.js'),
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar:{
        logo: {
          alt: 'ARCHIVE',
          src: 'img/logo.png',
          href: 'https://georgeeliotarchive.org/'
        },
        hideOnScroll: true,
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'All novels',
            to: '/',
            items:
            [
              {
                type: 'docSidebar',
                sidebarId: 'middleMarchSidebar',
                label: 'Middlemarch',
              },
              {
                type: 'docSidebar',
                sidebarId: 'theMillOnTheFlossSidebar',
                label: 'The Mill on the Floss',
              },
              {
                type: 'docSidebar',
                sidebarId: 'romolaSidebar',
                label: 'Romola',
              },
              {
                type: 'docSidebar',
                sidebarId: 'danielDerondaSidebar',
                label: 'Daniel Deronda',
              },
              {
                type: 'docSidebar',
                sidebarId: 'impressionsOfTheophrastusSuchSidebar',
                label: 'Impressions of Theophrastus Such',
              },
              {
                type: 'docSidebar',
                sidebarId: 'adamBedeSidebar',
                label: 'Adam Bede',
              },
              {
                type: 'docSidebar',
                sidebarId: 'scenesOfClericalLifeSidebar',
                label: 'Scenes of Clerical Life',
              },
              {
                type: 'docSidebar',
                sidebarId: 'silasMarnerSidebar',
                label: 'Silas Marner',
              },
              {
                type: 'docSidebar',
                sidebarId: 'felixHoltTheRadicalSidebar',
                label: 'Felix Holt, the Radical'
              }
            ],
          },
        //Chat with GE
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
