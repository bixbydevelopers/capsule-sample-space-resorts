const attributes = require("./lib/attributes.js")
const data = require("./lib/data.js")
const sorts = require("./lib/sorts.js")

module.exports.function = function findSpaceResorts (planet, searchCriteria) {
  var candidates = data;

  if (planet) {
    candidates = candidates.filter(function(candidate){
      return candidate.planet == planet
    })
  }

  if (searchCriteria) {
    [].concat(searchCriteria).forEach(function(searchCriterion){
      switch (searchCriterion.toLowerCase()) {
        case "casino":
        case "casinos":
          candidates = filterByAttribute(candidates, attributes.Casino)
          break;
        case "kid friendly":
        case "kid-friendly":
        case "good for kids":
        case "family friendly":
        case "family-friendly":
          candidates = filterByAttribute(candidates, attributes.KidFriendly)
          break;          
        case "pet friendly":
        case "pet-friendly":
        case "dog friendly":
        case "dog-friendly":
        case "cat friendly":
        case "cat-friendly":
          candidates = filterByAttribute(candidates, attributes.PetFriendly)
          break;
        case "refueling":
        case "refueling services":
        case "refueling station":
        case "refueling stations":
          candidates = filterByAttribute(candidates, attributes.Refueling)
          break;
        case "science":
        case "science base":
        case "scientific base":
          candidates = filterByAttribute(candidates, attributes.ScienceBase)
          break;
        case "spa":
        case "spas":
          candidates = filterByAttribute(candidates, attributes.Spa)
          break;
        case "swimming pool":
        case "swimming pools":
        case "swimming":
        case "pool": 
        case "pools": 
          candidates = filterByAttribute(candidates, attributes.SwimmingPool)
          break;
        case "zero gravity":
        case "no gravity":
          candidates = filterByAttribute(candidates, attributes.ZeroGravity)
          break;
        default:
          throw fail.checkedError("Unsupported search criterion: " + searchCriterion, "UnsupportedSearchCriteria", searchCriterion)
      }
    })
  }

  return candidates;
}

function filterByAttribute(spaceResorts, desiredAttribute) {
  return spaceResorts.filter(function(candidate) {
    return candidate.attributes.find(function(attribute) {
      return attribute === desiredAttribute
    })
  })
}
