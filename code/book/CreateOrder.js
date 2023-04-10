export default function ({buyer, item}) {
  // New order that only persist newly select inputs
  return {
    item: item,
    buyer: buyer,
  };
};
