var textLib = require('textLib')
var config = require('config')
const getSpaceResorts = require("./spaceResorts.js")
const sorts = require("./sorts.js")

module.exports = {
  "findSpaceResorts": findSpaceResorts,
  "selectSpaceResorts": selectSpaceResorts
}

function findSpaceResorts(name, planet, searchCriteria, language) {
  var data = getSpaceResorts(language)
  return filterSpaceResorts(data, name, planet, searchCriteria, language)
}

function selectSpaceResorts(resorts, name, planet, searchCriteria) {
  var candidates = data;
  if (resorts) {
    //keep candidates that are in resorts (not a efficient!)
    candidates = candidates.filter(function(candidate) {
      return resorts.find(function(resort) {
        if (candidate.name.toLowerCase() == resort.name.toLowerCase()) {
          return true
        }
      })
    })
  }
  candidates = filterSpaceResorts(candidates, name, planet, searchCriteria)
  return candidates
}

function filterSpaceResorts(candidates, name, planet, searchCriteria, language) {

  if (name) {
    candidates = candidates.filter(function(candidate){
      return candidate.name.toLowerCase() == name.toLowerCase()
    })
  }

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

            if (language == "ko") {
              return textLib.levenshteinDistance(keyword, searchCriterion) < 1 
            }
            else {
              // fuzzyMatch is too costly, so using simple levenshtein instead
              return textLib.levenshteinDistance(keyword, searchCriterion) < 4 
            }
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

function filterByAttribute(spaceResorts, desiredAttribute) {
  return spaceResorts.filter(function(candidate) {
    return candidate.amenities.find(function(amenity) {
      return amenity.keywords.find(function(keyword) {
        return textLib.fuzzyMatch(keyword, desiredAttribute, 3)
      })
    })
  })
}
