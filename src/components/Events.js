import "./Events.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function Events() {
  let city = "berlin";

  const [eventName, setEventName] = useState(
    `looks a little quiet in ${city}, no events found`
  );
  const [eventVenue, setEventVenue] = useState(" ");
  const [eventDate, setEventDate] = useState(" ");
  const [eventImage, setEventImage] = useState(" ");
  const [eventLink, setEventLink] = useState(" ");
  const [eventTime, setEventTime] = useState("");

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
      setEventTime(data._embedded.events[eventIndex].dates.start.localTime);

      console.log("i have rendered!");
      console.log(data);
      console.log(eventLink);
    }

    TicketMasterAPI();
  }, []);

  return (
    <div className="events">
      <div className="events-header">
        <h3>TRY A LOCAL EVENT:</h3>
      </div>
      <div className="events-body">
        <div className="event1">
          <div className="event-image">
            <a>
              <img src={eventImage} alt="Event 1" />
            </a>
          </div>
          <p>{eventName}</p>
          <p>{eventVenue}</p>
          <p>{eventDate}</p>
          <p>{eventTime}</p>

          <Button
            variant="contained"
            size="small"
            onClick={() => window.open(eventLink, "_blank")}
          >
            Buy Tickets
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Events;
