
const path = require("path")

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {

        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/components/layouts/package-layout.js`),
            context: { id: node.id, name: node.frontmatter.title }
          })
        })

      })
    )
  })
}