/* exported titleCase */
function capitalize(word) {
  var wordCapitalized = '';
  var char = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      char = word[i].toUpperCase();
    } else {
      char = word[i].toLowerCase();
    }
    wordCapitalized += char;
  }
  return wordCapitalized;
}

function handleH(wordH) {
  var arrayH = wordH.split('-');
  var newArrayH = [];
  var newWordH = '';
  newArrayH.push(capitalize(arrayH[0]));
  newArrayH.push('-');
  newArrayH.push(capitalize(arrayH[1]));
  newWordH = newArrayH.join('');
  return newWordH;
}

function titleCase(title) {
  var titleAPA = '';
  var array = title.split(' ');
  var newArray = [];
  var wordCurrent = '';
  var wordsMinor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === 'javascript') {
      wordCurrent = 'JavaScript';
    } else if (array[i].toLowerCase() === 'javascript:') {
      wordCurrent = 'JavaScript:';
    } else if (array[i].toLowerCase() === 'api') {
      wordCurrent = 'API';
    } else if (array[i].toLowerCase() === 'api:') {
      wordCurrent = 'API:';
    } else if (array[i].includes('-')) {
      wordCurrent = handleH(array[i]);
    } else if (i === 0) {
      wordCurrent = capitalize(array[i]);
    } else if (array[i - 1].includes(':')) {
      wordCurrent = capitalize(array[i]);
    } else if (wordsMinor.includes(array[i])) {
      wordCurrent = array[i].toLowerCase();
    } else {
      wordCurrent = capitalize(array[i]);
    }
    newArray.push(wordCurrent);
  }
  titleAPA = newArray.join(' ');
  return titleAPA;
}
