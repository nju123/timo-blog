/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Timo Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/musings`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`], // 添加.md扩展名
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // options for gatsby-remark-images
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // options for gatsby-remark-prismjs
            },
          },
          `gatsby-remark-autolink-headers`,
          // 在这里添加更多的 gatsby-remark-plugins
        ],
      },
    },
    "gatsby-transformer-sharp",
  ],
};