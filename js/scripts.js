// BUSINESS LOGIC

function Account(name, balance) {
  this.userName = name;
  this.userBalance = balance;
}

Account.prototype.deposit = function(depoNumber) {
    return this.userBalance += depoNumber;
}

Account.prototype.withdrawl = function(depoNumber) {
  return this.userBalance -= depoNumber;
}
















// USER INTERFACE LOGIC
$(function () {
  $("form#log-in").submit(function(event) {
    event.preventDefault();

    var userName = $("input#userName").val();
    var initialDepo = parseInt($("input#initial-depo").val());

    var newAccount = new Account(userName, initialDepo);

    if (userName) {
      if ( isNaN(initialDepo) || initialDepo <= 0) {
        alert("Please come back with more money")
      } else {
        $("input#userName").val("");
        $("input#initial-depo").val("");

        // $("form#log-in").fadeOut(2000);
        //
        // $("form#transAction").fadeIn(2000);
      }
    } else {
      alert("Please Enter a User Name")
    }


  });

  $("button#withDrawl").submit(function(event) {
    event.preventDefault();

    var depoNumber = $("input#amount").val();

    newAccount.withdrawl(depoNumber);

    $("input#amount").val("");

    alert("hi mom");



  });

  $("button#depoSit").submit(function(event) {
    event.preventDefault();

    var depoNumber = parseInt($("input#amount").val());

    newAccount.deposit(depoNumber);

    $("input#amount").val("");


    alert(newAccount.userBalance);
  });














});
