module.exports.function = function (spaceResort, cart, numberOfAstronauts, dateTimeExpression) {

  cart = cart || {};

  // Save new incoming inputs
  if (spaceResort) {
    cart.spaceResort = spaceResort
  }

  var updateOpenings = false

  if (numberOfAstronauts && cart.desiredNumberOfAstronauts != numberOfAstronauts) {
    cart.desiredNumberOfAstronauts = numberOfAstronauts
    updateOpenings = true
  }

  if (dateTimeExpression) { // TODO: Also check that the incoming dateInterval is different from the saved one
    cart.desiredDateTimeExpression = dateTimeExpression
    updateOpenings = true
  }

  if (cart.desiredNumberOfAstronauts && cart.desiredDateTimeExpression && updateOpenings) {
    delete cart.desiredOpening
    cart.openings = [
      {
        name: "Honeymoon",
        highlight: "Romantic",
        numberOfAstronauts: cart.desiredNumberOfAstronauts,
        dateInterval: {
          start: dates.ZonedDateTime.fromDate(cart.desiredDateTimeExpression.dateInterval.start).getDateTime().date,
          end: dates.ZonedDateTime.fromDate(cart.desiredDateTimeExpression.dateInterval.end).getDateTime().date 
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
        highlight: "Great for scientists",
        numberOfAstronauts: cart.desiredNumberOfAstronauts,
        dateInterval: {
          start: dates.ZonedDateTime.fromDate(cart.desiredDateTimeExpression.dateInterval.start).getDateTime().date,
          end: dates.ZonedDateTime.fromDate(cart.desiredDateTimeExpression.dateInterval.end).getDateTime().date 
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
  console.warn(cart)
  return cart;
}