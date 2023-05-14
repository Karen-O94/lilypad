let city = "Paris";

const apiKey = "IGAYyVG0ECptEE5ZMHXObHV2YaNqAQxO";
const apiUrl = "https://app.ticketmaster.com/discovery/v2/";

async function ticketMasterAPI() {
  const response = await fetch(
    apiUrl + `events.json?city=${city}&apikey=${apiKey}`
  );
  var data = await response.json();
  // API request

  let eventIndex = Math.floor(Math.random() * data._embedded.events.length);
  // generates a random number from the number of events

  document.querySelector(".name").innerHTML =
    data._embedded.events[eventIndex].name;
  // add event name to HTML

  document.querySelector(".venueName").innerHTML =
    data._embedded.events[eventIndex]._embedded.venues[0].name;
  // add venue name to HTML

  const date = new Date(
    data._embedded.events[eventIndex].dates.start.localDate
  );

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleString("en-UK", options);
  // format event date into desired format

  document.querySelector(".dates").innerHTML = formattedDate;
  // add formatted event date to html

  document.querySelector(".times").innerHTML =
    data._embedded.events[eventIndex].dates.start.localTime;
  // add event time to html

  const img = document.getElementById("eventImage");
  img.src = data._embedded.events[eventIndex].images[1].url;
  // add event image to html

  const link = document.getElementById("eventLink");
  link.href = data._embedded.events[eventIndex].url;
  // add link to event image
}

ticketMasterAPI();
// To do:
// add 2nd and 3rd event
// Error handling so 'undefined' doesn't show up
// break down into smaller functoins - put all HTML stuff into a function and call it within the ticketMasterAPI function
