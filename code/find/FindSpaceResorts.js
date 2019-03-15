const main = require("./lib/main.js")

module.exports.function = function findSpaceResorts (name, planet, searchCriteria, $vivContext) {
  return main.findSpaceResorts(name, planet, searchCriteria, $vivContext);
}
