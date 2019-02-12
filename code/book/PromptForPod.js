var lib = require("./lib/util.js")

module.exports.function = function (order, pod) {

  var changedItem = {}
  changedItem.item = order.item
  changedItem.newPod = pod
  return changedItem
}