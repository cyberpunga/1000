const slugify = require("slugify")

function createPath(str) {
  return "/" + slugify(str, { lower: true, strict: true, locale: "es" })
}

module.exports = {
  createPath,
}
