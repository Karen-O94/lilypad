import "./Results.css";
import BackButton from "../components/BackButton";
import KeyInfo from "../components/KeyInfo";
import Weather from "../components/Weather";
import News from "../components/News";
import Events from "../components/Events";
import Landscape_placeholder from "../images/landscape_placeholder.jpg";
import Translate from "../components/Translate";
import DataProvider from "../components/DataProvider";

function Results() {
  return (
    <div className="page-container">
        <div className="hero-container">
          <img
            className="hero-image"
            src={Landscape_placeholder}
            alt="landscape placeholder"
          ></img>
          <div className="hero-text">
            <h1>CITY NAME PLACEHOLDER</h1>
            <BackButton />
          </div>
        </div>
        <div className="body">
          <div className="body-left">
            <div className="key-info">
              <KeyInfo />
            </div>
            <div className="weather">
              <DataProvider>
                 <Weather />
              </DataProvider>
            </div>
          </div>
          <div className="body-right">
            <div className="news">
              <News />
            </div>
            <div className="events">
              <Events />
            </div>
          </div>
        </div>
        <div className="body-lower">
          {/* note classname body-lower not currently in use in results.css  */}
          <Translate />
        </div>
    </div>
  );
}

export default Results;
