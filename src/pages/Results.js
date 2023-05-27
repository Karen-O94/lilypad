import "./Results.css";
import KeyInfo from "../components/KeyInfo";
import Weather from "../components/Weather";
import Events from "../components/Events";
import lilypad from "../images/lilypad.jpg";
import Translate from "../components/Translate";
import Currency from "../components/Currency";
import TopNews from "../components/TopNews";
import CountryInfo from "../components/CountryInfo";
import SearchBar from "../components/SearchBar";
import Translation from "../components/Translation";

function Results({ props }) {
  const { city, locationPhoto } = props;

  const randomPhoto = () => {
    if (locationPhoto) {
      return locationPhoto[
        Math.floor(Math.random() * (locationPhoto.length - 0 + 1))
      ];
    }
    return lilypad;
  };

  return (
    <div className="page-container">
      <div className="hero-container">
        <img
          className="hero-image"
          src={randomPhoto()}
          alt="landscape placeholder"
        ></img>
        <div className="hero-text">
          <h1>WELCOME TO {city}!</h1>
          <SearchBar updateCity={props.updateCity} />
        </div>
      </div>

      <div className="upper-body">
        <div className="upper-body-left">
          <div className="key-info">
            <KeyInfo props={props} />
          </div>
          <div className="country-info">
            <CountryInfo props={props} />
          </div>
          <div className="currency">
            <Currency props={props} />
          </div>
          <br></br>
          <div className="weather">
            <Weather props={props} />
          </div>
        </div>

        <div className="upper-body-right">
          <div className="news">
            <TopNews props={props} />
          </div>

          <div className="events-and-translation-section">
            <div className="events">
              <Events city={props.city} />
            </div>
            <div className="translation">
              <Translation props={props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
