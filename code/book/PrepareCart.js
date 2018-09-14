module.exports.function = function (numberOfAstronauts, dateTimeExpression, cartWithOpenings, opening, hold, self) {
  // New cart that only persist newly select inputs 
  var preparedCart = {
    spaceResort: cartWithOpenings.spaceResort,
    desiredNumberOfAstronauts: numberOfAstronauts,
    desiredDateTimeExpression: dateTimeExpression,
    desiredOpening: opening,
    openings: cartWithOpenings.openings,
    hold: hold,
    self: self
  }

  return preparedCart;
}