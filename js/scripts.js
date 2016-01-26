function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.newRelease = function() {

  if (this.movie.length <= 10) {
    return 2;
  } else {
    return 0;
  }
};

Ticket.prototype.matinee = function () {
  if (this.time === "Evening") {
    return 2;
  } else {
    return 0;
  }
};

Ticket.prototype.senior = function () {
  if (this.age === "Senior") {
    return 2;
  } else {
    return 0;
  }
};

Ticket.prototype.ticketPrice = function () {
  var price = 10;
  var result = price + this.newRelease() + this.matinee() + this.senior();
  return result;
};

function resetFields() {
  $("input#newRelease").val("");
  $("input#matinee").val("");
  $("input#senior").val("");
};

$(document).ready(function() {
  $("form#ticketSelect").submit(function(event) {

    var inputMovie = #(this).find("input#newRelease").val();
    var inputMatinee = #(this).find("input#matinee").val();
    var inputTicketPrice = #(this).find("input#ticketPrice").val();
  });
});
