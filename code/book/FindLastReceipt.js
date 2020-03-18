var transaction = require('transaction')

// FindLastReceipt
exports.function = function() {
    //look up last receipt from viv cloud
    return transaction.retrieve("example.spaceResorts.Receipt", "ALL", 1)
}