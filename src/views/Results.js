import "./Results.css";
import BackButton from "./BackButton";
import KeyInfo from "./KeyInfo";
import Weather from "../components/Weather";
import News from "../components/News";
import Events from "../components/Events";
import Landscape_placeholder from "../images/landscape_placeholder.jpg";
import TranslatePhrases from "../components/TranslatePhrases";
import Translation from "../components/Translation";
import Currency from "../components/Currency";

// import Translate from "../components/Translate";

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
      <div className="upper-body">
        <div className="upper-body-left">
          <div className="key-info">
            <KeyInfo />
          </div>
          <div className="weather">
            <Weather />
          </div>
        </div>
        <div className="upper-body-right">
          <div className="news">
            <News />
          </div>
        </div>
      </div>
      <div className="mid-body">
        <div className="translation">
          <Translation />
        </div>
        <div className="currency">
          <Currency />
        </div>
      </div>
      <div className="lower-body">
        <div className="events">
          <Events />
        </div>
        <div className="translate-phrases">
          <TranslatePhrases />
        </div>
      </div>
    </div>
  );
}

export default Results;
