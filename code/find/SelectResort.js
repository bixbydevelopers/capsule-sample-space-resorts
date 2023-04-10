import main from "./lib/main.js";

export default function ({resorts, name, planet, searchCriteria, $vivContext}) {
  return main.selectSpaceResorts(
    resorts,
    name,
    planet,
    searchCriteria,
    $vivContext
  );
};
