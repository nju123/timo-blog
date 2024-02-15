/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title:"Timo Blog"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve:"gatsby-source-filesystem",
      options:{
      name:"blog",
      path:`${__dirname}/content`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },
    },
  ],

}
