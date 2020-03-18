var dates = require('dates')
var config = require('config')

module.exports.function = function (order) {
  return {
    $id:  "" + Math.floor(Math.random() * 10000000),
    item: order.item,
    buyer: order.buyer,
    relevantDateTime: dates.ZonedDateTime.fromDate(order.item.dateInterval.start).minusHours(config.get("relevantHours")).getDateTime()
  }
}
