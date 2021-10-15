const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(x => x * 2);
const prices = numbers.map(x => '$' + x.toFixed(2));
const upperCased = languages.map(x => x.toUpperCase());
const firstLetters = languages.map(x => x[0]);
