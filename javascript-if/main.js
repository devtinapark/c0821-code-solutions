/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var underFive = number < 5;
  return underFive;
}

function isEven(number) {
  var even = (number % 2) === 0;
  return even;
}

function startsWithJ(string) {
  var startsJ = string.charAt(0) === 'J';
  return startsJ;
}

function isOldEnoughToDrink(person) {
  var drinkAge = person.age >= 21;
  return drinkAge;
}

function isOldEnoughToDrive(person) {
  var driveAge = person.age >= 16;
  return driveAge;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  var result;
  if (pH === 7) {
    result = 'neutral';
  } else if (pH > 0 && pH < 7) {
    result = 'acid';
  } else if (pH > 7 && pH < 14) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}

function introduceWarnerBro(name) {
  var phrase;
  if (name === 'yakko' || name === 'wakko') {
    phrase = "We're the warner brothers!";
  } else if (name === 'dot') {
    phrase = "I'm cute~";
  } else {
    phrase = 'Goodnight everybody!';
  }
  return phrase;
}
