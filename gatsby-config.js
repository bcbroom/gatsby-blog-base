export default {
  siteMetadata: {
    title: `Brian's Starter Blog`,
    description: `Gatsby blog with a minimal set of components.`,
    author: `@bcbroom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
