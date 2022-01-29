// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const {
  GITHUB_REPO_URL,
  LINKEDIN_PROFILE_URL,
  LINKEDIN,
  GITHUB,
} = require("./constant");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dien Bui's page",
  tagline: "Hello there! Welcome to Dien's humble personal page",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Dien Bui's page",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "whoami",
            position: "left",
            label: "About",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: LINKEDIN_PROFILE_URL,
            label: LINKEDIN,
            position: "right",
          },
          {
            href: GITHUB_REPO_URL,
            label: GITHUB,
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "About",
                to: "/docs/whoami",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Social network",
            items: [
              {
                label: LINKEDIN,
                href: LINKEDIN_PROFILE_URL,
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: GITHUB,
                href: GITHUB_REPO_URL,
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} - Dien Bui's page. Built with Docusaurus. Hosted on CloudFlare Page`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
