const data = require("./data.json")
const { createPath } = require("./utils")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  data.forEach((curr, index) => {
    const nextIndex = index === data.length + 1 ? 1 : index + 1
    const prevIndex = index === 0 ? data.length : index - 1
    const next = data[nextIndex]
    const prev = data[prevIndex]
    createPage({
      path: createPath(curr.verso),
      component: require.resolve(`./src/templates/page.js`),
      context: { ...curr, next, prev },
    })
  })
}
