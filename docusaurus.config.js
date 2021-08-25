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
        { to: "docs/intro", label: "Documentación", position: "left" },
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
              label: "bff",
              to: "/spec/",
            },
            {
              label: "pet store",
              to: "/specUrl/",
            },
          ],
        },
        {
          title: "Contacto",
          items: [
            {
              label: "Solicitar servicio",
              href: "https://web.mensajerosurbanos.com/solicitar-servicio",
            },
            {
              label: "Pagina de empresa",
              href: "https://mensajerosurbanos.com/",
            },
            {
              label: "Plataforma MU",
              href: "https://plataforma.mensajerosurbanos.com/",
            },
          ],
        },
        {
          title: "Redes sociales",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/MensajerosUrbanos/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/mensajerosurbanos/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Juan Sebastian Corredor. Built with Docusaurus.`,
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
