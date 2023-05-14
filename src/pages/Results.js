import "./Results.css";
import Stack from "@mui/material/Stack";
import BackButton from "../components/BackButton";
import Country from "../components/Country";
import Language from "../components/Language";
import Currency from "../components/Currency";
import Timezone from "../components/Timezone";
import Weather from "../components/Weather";
import News from "../components/News";
import Events from "../components/Events";

function Results() {
  return (
    <>
      <div className="banner">
        <h3>CITY NAME PLACEHOLDER</h3>
      </div>
      <BackButton />
      <div className="stack">
        <Stack padding={10}>
          <Country />
          <Language />
          <Currency />
          <Timezone />
        </Stack>
      </div>
      <div className="weather">
        <Weather />
      </div>
      <div className="news">
        <News />
      </div>
      <div className="events">
        <Events />
      </div>
    </>
  );
}

export default Results;
