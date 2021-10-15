function map(inputArray, transform) {
  var outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    var inputElement = inputArray[i];
    var outputElement = transform(inputElement);
    outputArray.push(outputElement);
  }
  return outputArray;
}

const doubledT = x => x * 2;
