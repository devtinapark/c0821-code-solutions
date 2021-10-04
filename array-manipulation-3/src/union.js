/* exported union */
function union(first, second) {
  var arrayUnion = [];
  for (var i = 0; i < first.length; i++) {
    if (!arrayUnion.includes(first[i])) {
      arrayUnion.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!arrayUnion.includes(second[j])) {
      arrayUnion.push(second[j]);
    }
  }
  return arrayUnion;
}
