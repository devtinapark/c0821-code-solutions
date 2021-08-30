/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (var keys in object) {
    newArray.push(keys);
  }
  return newArray;
}
