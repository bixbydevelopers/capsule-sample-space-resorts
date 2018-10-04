module.exports.function = function (spaceResort, numberOfAstronauts, dateTimeExpression) {

  return [
    {
      name: "Honeymoon",
      spaceResort: spaceResort,
      highlight: "Romantic",
      numberOfAstronauts: numberOfAstronauts,
      dateInterval: {
        start: dates.ZonedDateTime.fromDate(dateTimeExpression.dateInterval.start).getDateTime().date,
        end: dates.ZonedDateTime.fromDate(dateTimeExpression.dateInterval.end).getDateTime().date
      }, // TODO: Should be able to just write `dateInterval: cart.desiredDateTimeExpression.dateInterval` but that gets a value compilation error
      price: {
        currencyType: {
          currencyCode: "USD"
        },
        value: 5000000
      }
    },
    {
      name: "The Lab",
      spaceResort: spaceResort,
      highlight: "Great for scientists",
      numberOfAstronauts: numberOfAstronauts,
      dateInterval: {
        start: dates.ZonedDateTime.fromDate(dateTimeExpression.dateInterval.start).getDateTime().date,
        end: dates.ZonedDateTime.fromDate(dateTimeExpression.dateInterval.end).getDateTime().date
      }, // TODO: Should be able to just write `dateInterval: cart.desiredDateTimeExpression.dateInterval` but that gets a value compilation error
      price: {
        currencyType: {
          currencyCode: "USD"
        },
        value: 200000
      }
    }
  ]
}