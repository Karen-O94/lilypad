import "./Results.css";
import KeyInfo from "../components/KeyInfo";
import Weather from "../components/Weather";
import Events from "../components/Events";
import lilypad from "../images/lilypad.jpg";
import Translate from "../components/Translate";
import Currency from "../components/Currency";
import TopNews from "../components/TopNews";
import Countries from "../components/Countries";

function Results({props}) {
  const {city, locationPhoto} = props;

  const randomPhoto = () => {
    if (locationPhoto) {
      return locationPhoto[Math.floor(Math.random() * (locationPhoto.length - 0 + 1))]  
    }
    return lilypad
  }

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
          </div>
        </div>
        <div className="body">
          <div className="body-left">
            <div className="key-info">
                <KeyInfo props={props}/>
            </div>
            <div>
              <Countries props={props} />
            </div>
            <br></br>
            <div className="currency">
                <Currency props={props}/>
            </div>
            <br></br>
            <div className="weather">
                <Weather props={props}/>
            </div>
          </div>
          <div className="body-right">
            <div className="news">
              <TopNews props={props}/>
            </div>
            <div className="events">
              <Events city={props.city}/>
            </div>
          </div>
        </div>
        <div className="body-lower">
          {/* note classname body-lower not currently in use in results.css  */}
          <Translate props={props} />
      </div>
    </div>
  );
}

export default Results;
