module.exports = {
  pathPrefix: "/ballerz-db",
  siteMetadata: {
    title: `ballerz showcase`,
    description: `A Ballerz demo site`,
    author: `@nftbig1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ballerz`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
