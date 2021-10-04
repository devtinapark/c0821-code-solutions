/* exported difference */
function difference(first, second) {
  var arrayDifference = [];
  var length;
  if (first.length >= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    if (first[i] !== undefined && !second.includes(first[i])) {
      arrayDifference.push(first[i]);
    }
  }
  for (var j = 0; j < length; j++) {
    if (second[j] !== undefined && !first.includes(second[j])) {
      arrayDifference.push(second[j]);
    }
  }
  return arrayDifference;
}
