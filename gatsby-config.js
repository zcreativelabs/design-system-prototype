const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'component-docs-prototype',
    description:
      'Simple component documentation prototype implemented with gatsby-mdx',
    author: 'zimrich <richard@zcreativelabs.com>',
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: { default: path.resolve('./src/components/layouts/index.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-react-docgen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "packages",
        path: `${__dirname}/packages/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'design-system-prototype',
        short_name: 'design-system',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
