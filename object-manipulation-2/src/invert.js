/* exported invert */
function invert(source) {
  var newObject = {};
  for (var key in source) {
    var newKey = source[key];
    var newValue = key;
    newObject[newKey] = newValue;
  }
  return newObject;
}
