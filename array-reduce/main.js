const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];
const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((x, y) => x + y);
const product = numbers.reduce((x, y) => x * y);
const arrayDeposit = [];
const arrayWithdrawal = [];
for (let i = 0; i < account.length; i++) {
  if (account[i].type === 'deposit') {
    arrayDeposit.push(account[i].amount);
  } else if (account[i].type === 'withdrawal') {
    arrayWithdrawal.push(account[i].amount);
  }
}
const balance = arrayDeposit.reduce((x, y) => x + y) - arrayWithdrawal.reduce((x, y) => x + y);
const composite = traits.reduce((x, y) => Object.assign(y, x));
