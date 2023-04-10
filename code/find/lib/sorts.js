export default {
  GravityASC: function (a, b) {
    return a.gravity - b.gravity;
  },
  GravityDESC: function (a, b) {
    return b.gravity - a.gravity;
  },
};
