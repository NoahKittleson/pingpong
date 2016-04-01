$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".output").text("");
    var limit = parseInt($("form #number").val());
    if (errorCheck(limit)) {
      countTo(limit);
    }
  });
});

function errorCheck(max) {
  if (!max) {
    $(".output").append("Error: Bad Input");
    return false;
  } else if (max <= 0) {
    $(".output").append("Error: Negative Number");
    return false;
  }
  return true;
}

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
