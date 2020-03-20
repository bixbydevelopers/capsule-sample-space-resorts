const main = require("./lib/main.js")

module.exports.function = function findSpaceResorts (name, planet, searchCriteria, $vivContext) {
  let language = "en"
  if ($vivContext.locale === "ko-KR") langugae = "ko"
  return main.findSpaceResorts(name, planet, searchCriteria, language);
}
