/* exported intersection */
function intersection(first, second) {
  var arrayIntersection = [];
  var length;
  if (first.length >= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    if (first[i] !== undefined && second.includes(first[i]) && !arrayIntersection.includes(first[i])) {
      arrayIntersection.push(first[i]);
    }
  }
  return arrayIntersection;
}
