const main = require("./lib/main.js")

module.exports.function = function (resorts, name, planet, searchCriteria) {
  return main.selectSpaceResorts(resorts, name, planet, searchCriteria);
}