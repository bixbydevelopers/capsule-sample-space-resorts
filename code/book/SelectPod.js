module.exports.function = function (pods, podName) {
  var matches = []
  //a lot can be improved here to improve matching the items
  for (var i=0; i<pods.length; i++) {
     if (textLib.fuzzyMatch(pods[i].name, podName)) {
       matches.push(pods[i])
     }
  }
  console.log("matches", matches, " for pods:", pods, " podName:", podName)
  if (matches.length > 1) {
    throw fail.checkedError("Multiple habitat pods matched", "MultipleMatches", {matches: matches})
  }
  if (matches.length == 1) {
    return matches[0]
  }

  //TODO: handle gracefully
  return null
}