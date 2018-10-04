module.exports.function = function (habitatPods, name) {
  if (habitatPods) {
    var matches = []
    habitatPods.forEach(function(habitatPod) {
      if (!name || habitatPod.name.toString() === name.toString()) {
        matches.push(habitatPod)
      }
    })
    console.log("matches", matches, " for habitats:", habitatPods, " name:", name)
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