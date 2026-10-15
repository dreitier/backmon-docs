// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'backmon',
  tagline: 'Monitoring of backup files in filesystems and object storages',
  url: 'https://backmon.dreitier.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dreitier', // Usually your GitHub org/user name.
  projectName: 'backmon', // Usually your repo name.

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
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dreitier/backmon-docs/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
		sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/docs/category/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    // legacy .ico fallback and iOS home-screen icon (Docusaurus 2.0 has no headTags option)
    function iconTags() {
      return {
        name: 'icon-tags',
        injectHtmlTags() {
          return {
            headTags: [
              {tagName: 'link', attributes: {rel: 'alternate icon', href: '/img/favicon.ico', sizes: 'any'}},
              {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png'}},
            ],
          };
        },
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        // old docs lived at the site root; keep those URLs working (intro is now the landing page)
        createRedirects(existingPath) {
          if (existingPath.startsWith('/docs/') && existingPath !== '/docs/intro') {
            return [existingPath.replace('/docs', '')];
          }
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'backmon',
        logo: {alt: '', src: 'img/logo.svg'},
        items: [
          {to: '/#features', label: 'Features', position: 'left', activeBaseRegex: '^$'},
          {to: '/#install', label: 'Installation', position: 'left', activeBaseRegex: '^$'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/dreitier/backmon',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://dreitier.com',
            label: 'dreitier',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {title: 'Docs', items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Concept', to: '/docs/concept'},
            {label: 'Metrics', to: '/docs/reference/metrics'},
          ]},
          {title: 'Project', items: [
            {label: 'GitHub', href: 'https://github.com/dreitier/backmon'},
            {label: 'Docker Hub', href: 'https://hub.docker.com/r/dreitier/backmon'},
            {label: 'Helm charts', href: 'https://dreitier.github.io/helm-charts/'},
          ]},
          {title: 'dreitier', items: [
            {label: 'Website', href: 'https://dreitier.com'},
            {label: 'GitHub organization', href: 'https://github.com/dreitier'},
          ]},
        ],
        copyright: `Made by <a href="https://dreitier.com">dreitier</a>. Sharing experience.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
	  metadata: [
	    {name: 'google-site-verification', content: 'iff1yw0ykLoAP7Z_BKK-S4XDRckQps3kLvK0byz-5WE'},
	    {name: 'msvalidate.01', content: 'FF94065F279E18FFAB402CDF11131567'},
	  ],
    }),
};

module.exports = config;
