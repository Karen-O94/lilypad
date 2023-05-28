import "./Events.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// importing react hooks and css file

function Events({ city }) {
  const [eventName, setEventName] = useState();
  const [eventVenue, setEventVenue] = useState(" ");
  const [eventDate, setEventDate] = useState(" ");
  const [eventImage, setEventImage] = useState(" ");
  const [eventLink, setEventLink] = useState(" ");
  const [eventTime, setEventTime] = useState("");

  useEffect(() => {
    if (city) {
      async function TicketMasterAPI() {
        let apiKey = "IGAYyVG0ECptEE5ZMHXObHV2YaNqAQxO";
        let apiURL = "https://app.ticketmaster.com/discovery/v2/";

        const response = await fetch(
          apiURL + `events.json?city=${city}&apikey=${apiKey}`
        );

        let data = await response.json();

        if (data._embedded) {
          let eventIndex = Math.floor(
            Math.random() * data._embedded.events.length
          );
          // generates a random number from the number of events, which is used to return a random event from the city

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
          setEventVenue(
            data._embedded.events[eventIndex]._embedded.venues[0].name
          );
          setEventDate(formattedDate);
          setEventImage(data._embedded.events[eventIndex].images[1].url);
          setEventLink(data._embedded.events[eventIndex].url);
          setEventTime(data._embedded.events[eventIndex].dates.start.localTime);
          // updates details
        } else {
          setEventName(
            `Sorry, we didn't find any events coming soon in ${city}`
          );
          setEventDate();
          setEventImage();
          setEventLink();
          setEventVenue();
          setEventTime();
        }
        // error handling so if no events are found message is given
      }

      TicketMasterAPI();
    }
  }, [city]);

  return (
    <div className="events-container">
      <div className="events-header">
        <h3>CHECK OUT A LOCAL EVENT IN {city}:</h3>
      </div>
      <div className="events-body">
        <div className="event">
          <div className="event-image">
            <img src={eventImage} alt="" />
          </div>
          <p>{eventName}</p>
          <p>{eventVenue}</p>
          <p>{eventDate}</p>
          <p>{eventTime}</p>

          <Button
            style={{
              backgroundColor: "#5A815C",
            }}
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
