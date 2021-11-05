const data = require("./data.json")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  data.forEach((node, index) => {
    createPage({
      path: "/" + parseInt(index + 1),
      component: require.resolve(`./src/components/template.js`),
      context: node,
    })
  })
}
