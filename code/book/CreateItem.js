var dates = require('dates')

module.exports.function = function (spaceResort, numberOfAstronauts, dateInterval, pod) {

  return {
    pod: pod,
    spaceResort: spaceResort,
    numberOfAstronauts: numberOfAstronauts,
    dateInterval: {
      start: dates.ZonedDateTime.fromDate(dateInterval.start).getDateTime().date,
      end: dates.ZonedDateTime.fromDate(dateInterval.end).getDateTime().date
    }, // TODO: Should be able to just write `dateInterval: cart.desiredDateTimeExpression.dateInterval` but that gets a value compilation error
  }
}