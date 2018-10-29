const data = require("./spaceResorts.js")
const sorts = require("./sorts.js")

module.exports = {
  "findSpaceResorts": function (planet, searchCriteria) {
    var candidates = data;

    if (planet) {
      candidates = candidates.filter(function(candidate){
        return candidate.planet == planet
      })
    }

    if (searchCriteria) {
      [].concat(searchCriteria).forEach(function(searchCriterion){
        candidates = filterByAttribute(candidates, searchCriterion)
      })
    }

    return candidates;
  }
}

function filterByAttribute(spaceResorts, desiredAttribute) {
  return spaceResorts.filter(function(candidate) {
    return candidate.attributes.find(function(attribute) {
      return textLib.fuzzyMatch(attribute, desiredAttribute, 4)
    })
  })
}
