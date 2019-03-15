var dates = require('dates')
var config = require('config')
var console = require('console')
module.exports.function = function (order, $vivContext) {
  var relevantHours = getLocalizedRelevantHours($vivContext)
  console.info($vivContext.locale, "relevant hours", relevantHours)
  return {
    $id:  "" + Math.floor(Math.random() * 10000000),
    item: order.item,
    buyer: order.buyer,
    relevantDateTime: dates.ZonedDateTime.fromDate(order.item.dateInterval.start).minusHours(relevantHours).getDateTime()
  }
}

function getLocalizedRelevantHours($vivContext) {
  switch($vivContext.locale.split('-')[0]) {
    case "ko":
      return config.get('ko.relevantHours')
    default:
      return config.get('base.relevantHours')
  }
}