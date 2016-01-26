describe("Ticket", function() {

  it("create a new ticket with the applicable input", function() {
    var testTicket = new Ticket ("Die Hard", "Matinee", "Senior");
    expect(testTicket.movie).to.equal("Die Hard");
    expect(testTicket.time).to.equal("Matinee");
    expect(testTicket.age).to.eql("Senior");
  });

  it("add function for new-release movie", function() {
    var testTicket = new Ticket ("Die Hard");
    expect(testTicket.newRelease()).to.equal(2);
  });

  it("add function for matinee price", function() {
    var testTicket = new Ticket ("Die Hard", "Evening");
    expect(testTicket.matinee()).to.equal(2);
  });

  it("add function for senior price", function() {
    var testTicket = new Ticket ("Die Hard", "Evening", "Senior");
    expect(testTicket.senior()).to.equal(2);
  });

  it("add function for ticket price", function() {
    var testTicket = new Ticket ("Die Hard", "Evening", "Senior");
    expect(testTicket.ticketPrice()).to.equal(16);
  });
});
