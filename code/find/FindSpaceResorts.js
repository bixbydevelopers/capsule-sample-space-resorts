import main from "./lib/main.js";

export default function ({name, planet, searchCriteria, $vivContext}) {
  return main.findSpaceResorts(name, planet, searchCriteria, $vivContext);
}
