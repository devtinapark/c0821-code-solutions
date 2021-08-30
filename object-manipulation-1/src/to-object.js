/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  newObject[key] = value;
  return newObject;
}
