/* exported numVowels */
function numVowels(string) {
  var numberVowels = 0;
  var stringLower = string.toLowerCase();
  for (var i = 0; i < stringLower.length; i++) {
    if (stringLower[i] === 'a' || stringLower[i] === 'e' || stringLower[i] === 'i' || stringLower[i] === 'o' || stringLower[i] === 'u') {
      numberVowels += 1;
    }
  }
  return numberVowels;
}
