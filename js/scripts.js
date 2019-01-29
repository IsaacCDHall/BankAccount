var account = 0;

function NewAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

NewAccount.prototype.newMoney = function(deposit) {
  account.balance += deposit;
}

NewAccount.prototype.loseMoney = function(withdrawal) {
  account.balance -= withdrawal;
}

$(document).ready(function() {
  $("#withdrawal").val("0");
  $("#deposit").val("0");
  $(".formGroup").submit(function(event) {
    event.preventDefault()
    var name = $("input#clientName").val();
    var balance = parseInt($("input#initialDeposit").val());
    $("#nameInitial").hide();
    $("#depositWithdrawal").show();

    return account = new NewAccount(name, balance);
  });
  $(".depositWithdrawal").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());
    account.loseMoney(withdrawal);
    account.newMoney(deposit);
    console.log(account);
    $(".showBalance").text(account.balance);
    $("#balanceShown").show("slow");
  });
});
