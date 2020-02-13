class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(type, price) {
    let ticket = new TicketType(type, price)
    this.availableTickets.push(ticket);
  }
}

class TicketType {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

const eventObj1 = new Event("KLOS Golden Gala", "An Evening with hollywood vampires");
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

const eventArray = new Array();
eventArray.push(eventObj1);
eventArray.push(eventObj2, eventObj3);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

console.log("eventObj1", eventObj1);
console.log("eventObj2", eventObj2);
console.log("eventObj3", eventObj3);

$(document).ready(() => {
  let html = "";
  $.each(eventArray, function(index, item) {
    html+= `<li>${item.name} - ${item.description}</li>`
  });
  $("#event").html(html);
});
