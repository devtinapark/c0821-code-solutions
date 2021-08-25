var x = 10;
var y = 99;
var z = 12345678910;

var maximumValue = Math.max(x, y, z);

console.log('maximumValue: ' + maximumValue);

var heroes = [
  'wonder woman',
  'spiderman',
  'hulk',
  'elektra'
];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero', randomHero);

var library = [
  {
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz'
  },
  {
    title: "So Good They Can't Ignore You",
    author: 'Cal Newport'
  },
  {
    title: 'The Subtle Art of Not Giving a Fuck',
    author: 'Mark Manson'
  }
];

var lastBook = library.pop();

console.log('lastBook: ', lastBook);

var firstBook = library.shift();

console.log('firstBook: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Christine Park';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
