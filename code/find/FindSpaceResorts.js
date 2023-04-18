import findResorts from "./lib/main.js";

export default function findSpaceResorts({name, planet, searchCriteria, $vivContext}) {
  return findResorts(name, planet, searchCriteria, $vivContext);
}
