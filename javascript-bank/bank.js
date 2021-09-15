/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var anAccount = new Account(this.nextAccountNumber, holder);
    anAccount.deposit(balance);
    this.accounts.push(anAccount);
    this.nextAccountNumber++;
    return anAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var resultAccount = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      resultAccount = this.accounts[i];
    }
  }
  return resultAccount;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    grandTotal += this.accounts[i].getBalance();
  }
  return grandTotal;
};
