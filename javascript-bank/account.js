/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var success = false;
  if (Number.isInteger(amount) && amount > 0) {
    var transactionDeposit = new Transaction('deposit', amount);
    this.transactions.push(transactionDeposit);
    success = true;
  }
  return success;
};

Account.prototype.withdraw = function (amount) {
  var success = false;
  if (Number.isInteger(amount) && amount > 0) {
    var transactionWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(transactionWithdrawal);
    success = true;
  }
  return success;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
