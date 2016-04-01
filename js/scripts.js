$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").text("");
    var limit = parseInt($("form #number").val());
    countTo(limit);
  })
});

function countTo (max) {
  for (var currentNumber = 1; currentNumber <= max; currentNumber++) {
    $(".output").append("<li>" + pongitize(currentNumber) + "</li>");
  }
}

function pongitize (number) {
  var message = "";
  if (number % 3 === 0) {
    message = message.concat("ping");
  }
  if (number % 5 === 0) {
    message = message.concat("pong");
  }
  if (!message) {
    message = number.toString();
  }
  return message;
}
