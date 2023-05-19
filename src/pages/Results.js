import "./Results.css";
import BackButton from "../components/BackButton";
import KeyInfo from "../components/KeyInfo";
import Weather from "../components/Weather";
import News from "../components/News";
import Events from "../components/Events";
import Landscape_placeholder from "../images/landscape_placeholder.jpg";
import Translate from "../components/Translate";
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
          <div className="button">
            <BackButton />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body_left">
          <div className="keyInfo">
            <KeyInfo />
          </div>

          <div className="weather">
            <Weather />
          </div>
        </div>
        <div className="body_right">
          <div className="news">
            <News />
          </div>
          <div className="events">
            <Events />
          </div>
        </div>
      </div>
      <div className="body_lower">
        <Translate />
      </div>
    </div>
  );
}

export default Results;
