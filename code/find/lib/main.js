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
        searchCriterion = searchCriterion.toLowerCase()
        candidates = candidates.filter(function(candidate) {
          return candidate.amenities.find(function(amenity) {
            return amenity.keywords.find(function(keyword) {
              keyword = keyword.toLowerCase()
              return textLib.levenshteinDistance(keyword, searchCriterion) < 4 // fuzzyMatch is too costly, so using simple levenshtein instead
            })
          })
        })
      })
    }

    // Flatten out the amenities to only keep the attribute as the label.
    candidates = candidates.map(function(candidate) {
      candidate.attributes = candidate.amenities.map(function(amenity) {
        return amenity.attribute
      })
      delete candidate.amenities
      return candidate
    })

    return candidates;
  }
}

function filterByAttribute(spaceResorts, desiredAttribute) {
  return spaceResorts.filter(function(candidate) {
    return candidate.amenities.find(function(amenity) {
      return amenity.keywords.find(function(keyword) {
        return textLib.fuzzyMatch(keyword, desiredAttribute, 3)
      })
    })
  })
}
