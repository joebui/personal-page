// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const {
  cocoon,
  github,
  linkedin,
  about,
  blog,
  TITLE,
  medium,
} = require("./constant");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: TITLE,
  tagline: "Hello there! Welcome to Dien's humble personal page",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "joebui",
  projectName: "personal-page",

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
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
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
        title: TITLE,
        logo: {
          alt: "My octocat",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "whoami",
            position: "left",
            label: about.TITLE,
          },
          { to: blog.PATH, label: blog.TITLE, position: "left" },
          {
            to: cocoon.PROJECT_COCOON_PATH,
            label: cocoon.PROJECT_COCOON,
            position: "left",
          },
          {
            href: linkedin.LINKEDIN_PROFILE_URL,
            label: linkedin.LINKEDIN,
            position: "right",
          },
          {
            label: medium.TITLE,
            href: medium.URL,
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sites",
            items: [
              {
                label: about.TITLE,
                to: about.PATH,
              },
              {
                label: blog.TITLE,
                to: blog.PATH,
              },
              {
                label: cocoon.PROJECT_COCOON,
                to: cocoon.PROJECT_COCOON_PATH,
              },
            ],
          },
          {
            title: "Social network",
            items: [
              {
                label: linkedin.LINKEDIN,
                href: linkedin.LINKEDIN_PROFILE_URL,
              },
              {
                label: medium.TITLE,
                href: medium.URL,
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: github.GITHUB,
                href: github.GITHUB_REPO_URL,
              },
              {
                label: cocoon.PROJECT_COCOON,
                href: cocoon.PROJECT_COCOON_URL,
              },
            ],
          },
        ],
        copyright:
          "Dien Bui's page. Built with Docusaurus. Hosted on CloudFlare Page",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
