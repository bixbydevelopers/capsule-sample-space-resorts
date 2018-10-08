exports.function = function(receipt) {
  if (receipt.state == "Ordered") {
    receipt.cancelled = true
  }
  return receipt
}
