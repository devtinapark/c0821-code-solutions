const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let answer = 0;

function calculate() {
  const x = Number(process.argv[2]);
  const y = Number(process.argv[4]);
  if (process.argv[3] === 'plus') {
    answer = add(x, y);
  } else if (process.argv[3] === 'minus') {
    answer = subtract(x, y);
  } else if (process.argv[3] === 'times') {
    answer = multiply(x, y);
  } else if (process.argv[3] === 'by') {
    answer = divide(x, y);
  }
  return answer;
}

calculate();

console.log('result: ', answer);
