/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const env = process.env.NODE_ENV || "development"
require("dotenv").config({ path: `./.env.${env}` })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Webstock`,
    description: `Web系の情報を中心に情報発信するブログです`,
    lang: `ja`,
    siteUrl: `https://webstock-blog.com/`,
    locale: `ja_JP`,
    fbappid: `xxxxxxxxx`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "PlZmCIRhU1o6CV0OLXcgTvHcOajodc4cF_Qi4iiz4gY",
        head: true,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webstock`,
        short_name: `Webstock`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon-maskable.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: "webstock",
        apis: [
          {
            endpoint: "blog",
          },
          {
            endpoint: "category",
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-imgix",
    //   options: {
    //     domain: "images.microcms-assets.io",
    //     fields: [
    //       {
    //         nodeType: "MicrocmsBlog",
    //         fieldName: "featuredImage",
    //         getUrl: node => node.eyecatch.url,
    //       },
    //     ],
    //   },
    // },
  ],
}
