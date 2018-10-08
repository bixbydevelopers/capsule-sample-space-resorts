module.exports.function = function (dateTimeExpression) {
  console.log("dateTimeExpression:", dateTimeExpression)
  if (dateTimeExpression.dateInterval) {
    return {
      start: dateTimeExpression.dateInterval.start,
      end: dateTimeExpression.dateInterval.end
    }
  }
  if (dateTimeExpression.dateTimeInterval) { //TODO end should be a day later
    return {
      start: dateTimeExpression.dateTimeInterval.start.date,
      end: dateTimeExpression.dateTimeInterval.end.date
    }
  }
  if (dateTimeExpression.date) {
    return {
      start: dateTimeExpression.date,
      end: dateTimeExpression.date
    }
  }
  return null //TODO handle error cases
}
