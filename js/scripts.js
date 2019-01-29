function NewAccount(name, balance) {
  this.name = name;
  this.balanace = 0
}

NewAccount.prototype.deposit = function(deposit) {
  return balance += deposit;
}

NewAccount.prototype.withdrawal = function(withdrawal) {
  return balance -= withdrawl;
}

$(document).ready(function() {
  $("#initialDepositButton").submit(function(event) {
    event.preventDefault()
    var name = $("#clientName").val();
    var initialDeposit = parseInt($("#initialDeposit").val());
    console.log(name);
    console.log(initialDeposit);
  })
});
