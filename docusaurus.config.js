const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Mensajeros Urbanos",
  tagline: "Bienvenido a la pagina de ejemplo para la documentación de MU",
  url: "https://Soulhox.github.io",
  baseUrl: "/Docusaurus-MU/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Soulhox", // Usually your GitHub org/user name.
  projectName: "Docusaurus-MU", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Mensajeros urbanos",
      logo: {
        alt: "MU logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/spec/", label: "bff", position: "left" },
        { to: "/specUrl/", label: "pet store", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
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
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "redocusaurus",
      {
        specs: [
          {
            routePath: "/spec/",
            spec: "bff.yaml",
          },
          {
            routePath: "/specUrl/",
            specUrl: "https://petstore.swagger.io/v2/swagger.json",
          },
        ],
        theme: {
          primaryColor: "#1890ff",
          redocOptions: {
            hideDownloadButton: false,
            nativeScrollbars: true,
            typography: {
              fontSize: "14px",
            },
          },
        },
      },
    ],
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
