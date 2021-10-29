/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
