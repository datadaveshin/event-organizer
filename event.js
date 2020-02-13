class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
}

const eventObj1 = new Event("KLOS Golden Gala", "An Evening with hollywood vampires");
console.log("eventObj1:", eventObj1);
