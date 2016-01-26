describe("Ticket", function() {

  it("create a new ticket with the applicable input", function() {
    var testTicket = new Ticket ("Die Hard");
    expect(testTicket.movie).to.equal("Die Hard");
    expect(testTicket.time).to.eql([]);
    expect(testTicket.age).to.eql([]);
  });

});

describe("Time", function() {

  it("create a new time with the applicable input", function() {
    var testTime = new Time ("Matinee");
    expect(testTime.matinee).to.equal("Matinee");
    expect(testTime.evening).to.equal("Evening");
  });
});
