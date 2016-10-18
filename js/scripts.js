// BUSINESS LOGIC

function Account(name, balance) {
  this.userName = name;
  this.userBalance = balance;
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
      }
    } else {
      alert("Please Enter a User Name")
    }



  });
});
