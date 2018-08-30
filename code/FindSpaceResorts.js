const data = require("./lib/spaceResortsData.js")
const sorts = require("./lib/spaceResortsSorts.js")

module.exports.function = function findSpaceResorts (planet, sort) {
  var candidates = data;

  if (planet) {
    candidates = candidates.filter(function(candidate){
      return candidate.planet == planet
    })
  }

  if (sort) {
    candidates = candidates.sort(sorts[sort])
  }

  return candidates;
}
