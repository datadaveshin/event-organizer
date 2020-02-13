class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
}

const eventObj1 = new Event("KLOS Golden Gala", "An Evening with hollywood vampires");
console.log("eventObj1:", eventObj1);

const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");
console.log("eventObj1:", eventObj2);
console.log("eventObj1:", eventObj3);
