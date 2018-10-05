module.exports.function = function (self, item) {
  // New order that only persist newly select inputs
  return {
    item: item,
    self: self
  }
}