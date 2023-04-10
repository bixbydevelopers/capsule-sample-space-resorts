export default function ({order, numberOfAstronauts, dateInterval, pod}) {
  var changedItem = {};
  changedItem.item = order.item;
  if (numberOfAstronauts) {
    changedItem.newNumberOfAstronauts = numberOfAstronauts;
  }
  if (dateInterval) {
    changedItem.newDateInterval = dateInterval;
  }
  if (pod) {
    changedItem.newPod = pod;
  }
  return changedItem;
};
