import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Schistoscope',
  tagline: 'Documentation website for Schistoscope',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'ignore',

  // Set the production url of your site here
  url: 'https://delftopenhardware.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SchistoscopeDocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'delftopenhardware', // Usually your GitHub org/user name.
  projectName: 'SchistoscopeDocs', // Usually your repo name.

  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/delftopenhardware/SchistoscopeDocs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/delftopenhardware/SchistoscopeDocs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Schistoscope',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Logo-inspired.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hardwareSidebar',
          position: 'left',
          label: 'Hardware',
        },
        {
          type: 'docSidebar',
          sidebarId: 'softwareSidebar',
          position: 'left',
          label: 'Software',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dataSidebar',
          position: 'left',
          label: 'Data',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/delftopenhardware/SchistoscopeDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/docs_hardware/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Inspired Website',
              href: 'https://inspired-diagnostics.info/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Schistoscope, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;