module.exports.function = function (items, name) {
  if (items) {
    var matches = []
    items.forEach(function(item) {
      if (!name || item.name.toString() === name.toString()) {
        matches.push(item)
      }
    })
    console.log("matches", matches, " for habitats:", items, " name:", name)
    if (matches.length > 1) {
      throw fail.checkedError("Multiple habitat pods matched", "MultipleMatches", {matches: matches})
    }
    if (matches.length == 1) {
      return matches[0]
    }
  }

  //TODO: handle gracefully
  return null
}