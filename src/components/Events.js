import Event1 from "../images/Event_1_placeholder.webp";
import Event2 from "../images/Event_2_placeholder.webp";
import Event3 from "../images/Event_3_placeholder.webp";
import "./Events.css";

function Events() {
  return (
    <div className="events">
      <div className="events-Header">
        <h3>LOCAL EVENTS</h3>
      </div>
      <div className="events-Body">
        <div className="event1">
          <div className="event-image">
            <a href="https://www.ticketmaster.co.uk/harry-styles-tickets/artist/5228999?int_cmp_name=Harry-Styles-2023&int_cmp_id=UK-Home-601&int_cmp_creative=Home-main-3&tm_link=tm_ccp_Home_main_Harry-Styles-2023#gallery">
              <img src={Event1} alt="Event 1" />
            </a>
          </div>
          <p>Harry Styles</p>
          <p>Wembley Stadium</p>
          <p>13th June 19:00</p>
        </div>
        <div className="event2">
          <div className="events-image">
            <a href="https://www.ticketmaster.co.uk/red-hot-chili-peppers-tickets/artist/848229?int_cmp_name=Red-Hot-Chili-Peppers-2023&int_cmp_id=UK-10001-601&int_cmp_creative=Music-main-3&tm_link=tm_ccp_Music_main_Red-Hot-Chili-Peppers-2023">
              <img src={Event2} alt="Event 2" />
            </a>
          </div>
          <p>Red Hot Chili Peppers</p>
          <p>Tottenham Hotspur Stadium</p>
          <p>21st July 17:00</p>
        </div>
        <div className="event3">
          <div className="event-image">
            <a href="https://www.ticketmaster.co.uk/wizkid-tickets/artist/1599125?int_cmp_name=Wizkid-2023&int_cmp_id=UK-10001-601&int_cmp_creative=Music-main-1&tm_link=tm_ccp_Music_main_Wizkid-2023">
              <img src={Event3} alt="Event 3" />
            </a>
          </div>
          <p>WizKid</p>
          <p>Tottenham Hotspur Stadium</p>
          <p>29th July 17:00</p>
        </div>
      </div>
    </div>
  );
}

export default Events;

// let city = "Paris";

// const apiKey = "IGAYyVG0ECptEE5ZMHXObHV2YaNqAQxO";
// const apiUrl = "https://app.ticketmaster.com/discovery/v2/";

// async function ticketMasterAPI() {
//   const response = await fetch(
//     apiUrl + `events.json?city=${city}&apikey=${apiKey}`
//   );
//   var data = await response.json();
//   // API request

//   let eventIndex = Math.floor(Math.random() * data._embedded.events.length);
//   // generates a random number from the number of events

//   document.querySelector(".name").innerHTML =
//     data._embedded.events[eventIndex].name;
//   // add event name to HTML

//   document.querySelector(".venueName").innerHTML =
//     data._embedded.events[eventIndex]._embedded.venues[0].name;
//   // add venue name to HTML

//   const date = new Date(
//     data._embedded.events[eventIndex].dates.start.localDate
//   );

//   const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };

//   const formattedDate = date.toLocaleString("en-UK", options);
//   // format event date into desired format

//   document.querySelector(".dates").innerHTML = formattedDate;
//   // add formatted event date to html

//   document.querySelector(".times").innerHTML =
//     data._embedded.events[eventIndex].dates.start.localTime;
//   // add event time to html

//   const img = document.getElementById("eventImage");
//   img.src = data._embedded.events[eventIndex].images[1].url;
//   // add event image to html

//   const link = document.getElementById("eventLink");
//   link.href = data._embedded.events[eventIndex].url;
//   // add link to event image
// }

// ticketMasterAPI();
// // To do:
// // add 2nd and 3rd event
// // Error handling so 'undefined' doesn't show up
// // break down into smaller functoins - put all HTML stuff into a function and call it within the ticketMasterAPI function
