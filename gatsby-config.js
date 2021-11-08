module.exports = {
  siteMetadata: {
    title: `Mil versos chilenos`,
    description: `Esta es una edición electrónica de «Mil versos chilenos», una recopilación realizada por Felipe Cussen y Marcela Labraña.`,
    author: `@piducancore`,
    siteUrl: `https://mil-versos-chilenos.vercel.app`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mil versos chilenos`,
        short_name: `Mil versos chilenos`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/luca.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`,
  ],
}
