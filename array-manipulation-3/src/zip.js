/* exported zip */
function zip(first, second) {
  var arrayNew = [];
  var arrayCurrent = [];
  var length;
  if (first.length <= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    arrayCurrent.push(first[i]);
    arrayCurrent.push(second[i]);
    arrayNew.push(arrayCurrent);
    arrayCurrent = [];
  }
  return arrayNew;
}
