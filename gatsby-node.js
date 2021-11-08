const data = require("./data.json")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  data.forEach((node, index) => {
    createPage({
      path: "/" + (index + 1),
      component: require.resolve(`./src/templates/page.js`),
      context: node,
    })
  })
}
