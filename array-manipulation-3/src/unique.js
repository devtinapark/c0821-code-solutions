/* exported unique */
function unique(array) {
  var arrayUnique = [];
  for (var i = 0; i < array.length; i++) {
    if (!arrayUnique.includes(array[i])) {
      arrayUnique.push(array[i]);
    }
  }
  return arrayUnique;
}
