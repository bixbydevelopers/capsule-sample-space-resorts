module.exports = {
  "GravityASC": function(a, b) {
    console.log("ASC", a.gravity - b.gravity)
    return a.gravity - b.gravity
  },
  "GravityDESC": function (a, b) {
    console.log("DESC", b.gravity - a.gravity)
    return b.gravity - a.gravity
  }
}