const main = require("./lib/main.js")

module.exports.function = function (resorts, name, planet, searchCriteria, $vivContext) {
  return main.selectSpaceResorts(resorts, name, planet, searchCriteria, $vivContext);
}