import "./Events.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function Events({ city }) {
  // const {city} = props;

  const [eventName, setEventName] = useState();
  const [eventVenue, setEventVenue] = useState(" ");
  const [eventDate, setEventDate] = useState(" ");
  const [eventImage, setEventImage] = useState(" ");
  const [eventLink, setEventLink] = useState(" ");
  const [eventTime, setEventTime] = useState("");
  const [buttonText, setButtonText] = useState();

  useEffect(() => {
    if (city) {
      async function TicketMasterAPI() {
        let apiKey = "IGAYyVG0ECptEE5ZMHXObHV2YaNqAQxO";
        let apiURL = "https://app.ticketmaster.com/discovery/v2/";

        try {
          const response = await fetch(
            apiURL + `events.json?city=${city}&apikey=${apiKey}`
          );
  
          let data = await response.json();
          // console.log(data);
          // console.log(city);
  
          if (data._embedded) {
            let eventIndex = Math.floor(
              Math.random() * data._embedded.events.length
            );
  
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
            setButtonText("Buy Tickets")
  
            // console.log("i have rendered!");
  
          } else {
            setEventName(
              `Sorry, we didn't find any events coming soon in ${city}`)
            setEventDate()
            setEventImage()
            setEventLink('https://www.ticketmaster.co.uk/')
            setEventVenue()
            setEventTime()
            setButtonText("Visit Ticketmaster")
  
          }
        }
        catch (error) {
          alert("There was an error fetching the event data", error);
        }

        // console.log(data);
        // console.log(eventLink);
      }

      TicketMasterAPI();
    }
  }, [city]);

  return (
    <div className="events">
      <div className="events-header">
        <h3>CHECK OUT A LOCAL EVENT IN {city}:</h3>
      </div>
      <div className="events-body">
        <div className="event1">
          <div className="event-image">
            {/* <a> */}
            <img src={eventImage} alt="" />
            {/* </a> */}
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
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Events;
