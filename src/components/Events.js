// import Event1 from "../images/Event_1_placeholder.webp";
import Event2 from "../images/Event_2_placeholder.webp";
import Event3 from "../images/Event_3_placeholder.webp";
import "./Events.css";
import { useEffect, useState } from "react";

function Events() {
  let city = "Paris";

  const [eventName, setEventName] = useState(
    "no events listed, why not start your own?"
  );
  const [eventVenue, setEventVenue] = useState(" ");
  const [eventDate, setEventDate] = useState(" ");
  const [eventImage, setEventImage] = useState(" ");
  const [eventLink, setEventLink] = useState(" ");

  useEffect(() => {
    async function TicketMasterAPI() {
      const apiKey = "IGAYyVG0ECptEE5ZMHXObHV2YaNqAQxO";
      const apiURL = "https://app.ticketmaster.com/discovery/v2/";

      const response = await fetch(
        apiURL + `events.json?city=${city}&apikey=${apiKey}`
      );

      var data = await response.json();

      let eventIndex = Math.floor(Math.random() * data._embedded.events.length);

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

      setEventName(data._embedded.events[eventIndex].name);
      setEventVenue(data._embedded.events[eventIndex]._embedded.venues[0].name);
      setEventDate(formattedDate);
      setEventImage(data._embedded.events[eventIndex].images[1].url);
      setEventLink(data._embedded.events[eventIndex].url);
    }

    TicketMasterAPI();
  });

  return (
    <div className="events">
      <div className="events-header">
        <h3>LOCAL EVENTS</h3>
      </div>
      <div className="events-body">
        <div className="event1">
          <div className="event-image">
            <a href={eventLink}>
              <img src={eventImage} alt="Event 1" />
            </a>
          </div>
          <p>{eventName}</p>
          <p>{eventVenue}</p>
          <p>{eventDate}</p>
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

// // To do:
// // add 2nd and 3rd event
// // Error handling so 'undefined' doesn't show up
// // break down into smaller functoins - put all HTML stuff into a function and call it within the ticketMasterAPI function
