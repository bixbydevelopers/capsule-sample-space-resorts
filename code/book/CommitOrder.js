module.exports.function = function (order) {
  return {
    $id:  "" + Math.floor(Math.random() * 10000000),
    item: order.item,
    buyer: order.buyer
  }
}
