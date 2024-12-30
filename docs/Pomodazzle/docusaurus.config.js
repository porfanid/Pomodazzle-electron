// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pomodazzle',
  tagline: 'Boost Your Focus, Maximize Your Productivity',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'porfanid', // Your GitHub username
  projectName: 'Pomodazzle-electron', // Your repository name

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/pomodazzle-social-card.jpg',
        navbar: {
          title: 'Pomodazzle',
          logo: {
            alt: 'Pomodazzle Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Documentation',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/porfanid/Pomodazzle-electron',
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
                  label: 'GitHub Docs',
                  to: 'https://github.com/porfanid/Pomodazzle-electron',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discussions',
                  href: 'https://github.com/porfanid/Pomodazzle-electron/discussions',
                },
                {
                  label: 'Issues',
                  href: 'https://github.com/porfanid/Pomodazzle-electron/issues',
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
                {
                  label: 'GitHub',
                  href: 'https://github.com/porfanid/Pomodazzle-electron',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Pomodazzle, Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
