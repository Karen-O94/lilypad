import "./Results.css";
// import BackButton from "../components/BackButton";
import KeyInfo from "../components/KeyInfo";
import Weather from "../components/Weather";
import News from "../components/News";
import Events from "../components/Events";
// import Landscape_placeholder from "../images/landscape_placeholder.jpg";
import lilypad1 from "../images/lilypad5.jpg";
import Translate from "../components/Translate";
// import DataProvider from "../components/DataProvider";
import Currency from "../components/Currency";

function Results({props}) {
  const {city, locationPhoto} = props;

  const randomPhoto = () => {
    if (locationPhoto) {
      return locationPhoto[Math.floor(Math.random() * (locationPhoto.length - 0 + 1))]  
    }
    // console.log()
    return lilypad1
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
            {/* <BackButton /> */}
          </div>
        </div>
        <div className="body">
          <div className="body-left">
            <div className="key-info">
              {/* <DataProvider> */}
                <KeyInfo props={props}/>
              {/* </DataProvider> */}
            </div>
            <div className="weather">
              {/* <DataProvider> */}
                <Weather props={props}/>
              {/* </DataProvider> */}
            </div>
          </div>
          <div className="body-right">
            <div className="news">
              <News props={props}/>
            </div>
            <div className="events">
              <Events props={props}/>
            </div>
          </div>
        </div>
        <div className="body-lower">
          {/* note classname body-lower not currently in use in results.css  */}
          <Translate props={props}/>
        <div className="events">
          {/* <DataProvider> */}
            <Currency props={props}/>
          {/* </DataProvider> */}
          </div>
      </div>
    </div>
  );
}

export default Results;
