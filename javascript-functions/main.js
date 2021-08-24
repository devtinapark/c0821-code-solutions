function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('convertMinutesToSeconds(7): ', convertMinutesToSeconds(7));

function greet(name) {
  var greeting = '"hey, ' + name + '"';
  return greeting;
}

console.log("greet('Christine'): ", greet('Christine'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('getArea(5,25): ', getArea(5, 25));

function getFirstName(person) {
  person = {};
  return person.firstName;
}

console.log("getFirstName({firstName: 'Christine', lastName: 'Park'}): ", getFirstName({ firstName: 'Christine', lastName: 'Park' }));

function getLastElement(array) {
  array = [];
  return array[array.length - 1];
}
console.log("getLastElement(['propane', 'and', 'propane', 'accessories'])", getLastElement(['propane', 'and', 'propane', 'accessories']));
