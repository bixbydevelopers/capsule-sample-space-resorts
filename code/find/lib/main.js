import data from "./spaceResorts.js";
import sorts from "./sorts.js";

export default {
  findSpaceResorts: findSpaceResorts,
  selectSpaceResorts: selectSpaceResorts,
};

function findSpaceResorts(name, planet, searchCriteria, $vivContext) {
  return filterSpaceResorts(
    data($vivContext.locale),
    name,
    planet,
    searchCriteria,
    $vivContext
  );
}

function selectSpaceResorts(
  resorts,
  name,
  planet,
  searchCriteria,
  $vivContext
) {
  var candidates = data($vivContext.locale);
  if (resorts) {
    //keep candidates that are in resorts (not a efficient!)
    candidates = candidates.filter(function (candidate) {
      return resorts.find(function (resort) {
        if (candidate.name.toLowerCase() == resort.name.toLowerCase()) {
          return true;
        }
      });
    });
  }
  candidates = filterSpaceResorts(
    candidates,
    name,
    planet,
    searchCriteria,
    $vivContext
  );
  return candidates;
}

function filterSpaceResorts(
  candidates,
  name,
  planet,
  searchCriteria,
  $vivContext
) {
  if (name) {
    candidates = candidates.filter(function (candidate) {
      return candidate.name.toLowerCase() == name.toLowerCase();
    });
  }

  if (planet) {
    candidates = candidates.filter(function (candidate) {
      return candidate.planet == planet;
    });
  }

  if (searchCriteria) {
    [].concat(searchCriteria).forEach(function (searchCriterion) {
      searchCriterion = searchCriterion.toLowerCase();
      candidates = candidates.filter(function (candidate) {
        return candidate.amenities.find(function (amenity) {
          return amenity.keywords.find(function (keyword) {
            keyword = keyword.toLowerCase();
            return keyword.includes(searchCriterion);
          });
        });
      });
    });
  }

  // Flatten out the amenities to only keep the attribute as the label.
  candidates = candidates.map(function (candidate) {
    candidate.attributes = candidate.amenities.map(function (amenity) {
      return amenity.attribute;
    });
    delete candidate.amenities;
    return candidate;
  });

  return candidates;
}

function filterByAttribute(spaceResorts, desiredAttribute) {
  return spaceResorts.filter(function (candidate) {
    return candidate.amenities.find(function (amenity) {
      return amenity.keywords.find(function (keyword) {
        return keyword.includes(desiredAttribute);
      });
    });
  });
}
