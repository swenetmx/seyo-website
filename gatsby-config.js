const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Seyo México`,
    description: `Abre la puerta al futuro, abre la puerta a SEYO.`,
    author: `@irvingdc`,
    siteUrl: `https://seyo.mx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://seyo.mx",
        sitemap: "https://seyo.mx/sitemap.xml",
        policy:
          process.env.GATSBY_ACTIVE_ENV === "QA"
            ? [{ userAgent: "*", disallow: ["/"] }]
            : [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-K4GT9YCZFH"],
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `seyo.site`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
    //     useACF: true,
    //     concurrentRequests: 10,
    //     includedRoutes: [
    //       "**/*/*/categories",
    //       "**/*/*/posts",
    //       "**/*/*/pages",
    //       "**/*/*/media",

    //     ]
    //   }
    // },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        pdfs: path.join(__dirname, "src/pdfs"),
        components: path.join(__dirname, "src/components"),
        stylesheets: path.join(__dirname, "src/stylesheets"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#8dbe40",
          "link-color": "#1890ff",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seyo-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#008fc7`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
