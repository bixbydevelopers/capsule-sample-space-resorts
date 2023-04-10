import lib from './lib/util.js';

export default function (order, pod) {
  var changedItem = {};
  changedItem.item = order.item;
  changedItem.newPod = pod;
  return changedItem;
};
