module.exports.function = function (order, changedItem, buyer) {
  var item = null
  if (changedItem) {
    item = changedItem.item
    //TODO validate if the new number of astronauts and new date interval works, if not throw checked errors
    if (changedItem.newNumberOfAstronauts) {
      item.numberOfAstronauts = changedItem.newNumberOfAstronauts
    }
    if (changedItem.newDateInterval) {
      item.dateInterval = changedItem.newDateInterval
    }
    if (changedItem.newPod) {
      item.pod = changedItem.newPod
    }
  }
  return {
    item: item ? item : order.item,
    buyer: buyer ? buyer : order.buyer
  }
}