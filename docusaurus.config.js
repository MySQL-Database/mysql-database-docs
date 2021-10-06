const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MySQL Database',
  tagline: 'Easily modify your MySQL database data with easy functions',
  url: 'https://mysql-db.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: '1TGDev', // Usually your GitHub org/user name.
  projectName: 'mysql-database', // Usually your repo name.
  themeConfig: {
	colorMode: {
	  defaultMode: 'dark',
	},
    navbar: {
      title: 'MySQL Database',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.gg/qgVtMwDuqQ',
          label: 'Discord',
          position: 'right',
        },
		{
          href: 'https://github.com/1TGDev/mysql-database',
          label: 'GitHub',
          position: 'right',
        },
		{
          href: 'https://npmjs.com/mysql-database',
          label: 'NPM',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Get Started',
              to: '/docs/get-started',
            },
			{
              label: 'MySQL Class',
              to: '/docs/classes/MySQL',
            },
			{
              label: 'JSON Notation',
              to: '/docs/json-notation',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/qgVtMwDuqQ',
            },
			{
              label: 'GitHub',
              href: 'https://github.com/1TGDev/mysql-database',
            },
            {
              label: 'NPM',
              href: 'https://npmjs.com/mysql-database',
            },
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Author',
              to: 'https://itariq.dev',
            },
          ],
        },
      ],
      copyright: `© Copyright © ${new Date().getFullYear()} All Rights Reserved, <a href="https://itariq.dev" target="_blank">TARIQ</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/1TGDev/mysql-database-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/1TGDev/mysql-database-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
