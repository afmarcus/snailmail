module.exports = {
  siteMetadata: {
    title: 'Slow Ventures SnailMail',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: `src`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://seanmangosing.us15.list-manage.com/subscribe/post?u=8953ecee69329d2489a619c09&amp;id=77a445829f',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
      },
    },
  ],
}
