import ZonedDateTime from "../lib/zoned-date-time-polyfill.js";
export default function ({spaceResort, numberOfAstronauts, dateInterval, pod, $vivContext}) {
  ZonedDateTime.setVivContext($vivContext);
  return {
    pod: pod,
    spaceResort: spaceResort,
    numberOfAstronauts: numberOfAstronauts,
    dateInterval: {
      start: ZonedDateTime.fromDate(dateInterval.start).getDateTime()
        .date,
      end: ZonedDateTime.fromDate(dateInterval.end).getDateTime().date,
    }, // TODO: Should be able to just write `dateInterval: cart.desiredDateTimeExpression.dateInterval` but that gets a value compilation error
  };
};
