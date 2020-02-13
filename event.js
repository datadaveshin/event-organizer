class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
}

const eventObj1 = new Event("KLOS Golden Gala", "An Evening with hollywood vampires");
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

const eventArray = new Array();
eventArray.push(eventObj1);
eventArray.push(eventObj2, eventObj3);

$(document).ready(() => {
  let html = "";
  $.each(eventArray, function(index, item) {
    html+= `<li>${item.name} - ${item.description}</li>`
  });
  $("#event").html(html);
});
