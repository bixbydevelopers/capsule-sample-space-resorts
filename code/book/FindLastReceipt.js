// FindLastReceipt
exports.function = function() {
    //look up last receipt from viv cloud
    return transaction.retrieve("bixby.spaceResorts.Receipt", "ALL", 1)
}