const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((res, rej) => {
    graphql(`
      {
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(results => {
      results.data.allContentfulBlog.edges.forEach(({ node }) => {
        createPage({
          path: `deals/${node.slug}`,
          component: path.resolve("./src/templates/DealPage.js"),
          context: {
            slug: node.slug,
          },
        })
      })
      res()
    })
  })
}
