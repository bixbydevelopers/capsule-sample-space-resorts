module.exports.function = function (self, habitatPod) {
  // New order that only persist newly select inputs
  return {
    habitatPod: habitatPod,
    self: self
  }
}