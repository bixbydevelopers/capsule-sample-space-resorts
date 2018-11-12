const main = require("./lib/main.js")

module.exports.function = function findSpaceResorts (planet, searchCriteria, $vivContext) {
  return main.findSpaceResorts(planet, searchCriteria, $vivContext);
}
