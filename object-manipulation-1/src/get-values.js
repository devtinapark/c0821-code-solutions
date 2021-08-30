/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (var keys in object) {
    newArray.push(object[keys]);
  }
  return newArray;
}
