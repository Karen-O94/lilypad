import "./Results.css";
import KeyInfo from "../components/KeyInfo";
import Weather from "../components/Weather";
import Events from "../components/Events";
import lilypad from "../images/lilypad.jpg";
import Currency from "../components/Currency";
import TopNews from "../components/TopNews";
import CountryInfo from "../components/CountryInfo";
import SearchBar from "../components/SearchBar";
import Translation from "../components/Translation";
import TranslatePhrases from "../components/TranslatePhrases";
import React, { useState, lazy, Suspense } from "react";

function Results({ props }) {
  const { city, locationPhoto } = props;
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [searchClick, setSearchClick] = useState(false);

  const randomPhoto = () => {
    if (locationPhoto) {
      return locationPhoto[
        Math.floor(Math.random() * (locationPhoto.length - 0 + 1))
      ];
    }
    return lilypad;
  };

  const handleSearchClick = () => {
    setSearchClick(true);
    setWelcomeMessage(false);
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
          {welcomeMessage ? (
            <h1>Where would you like to go?</h1>
          ) : (
            <h1>WELCOME TO {city}!</h1>
          )}
          <SearchBar
            updateCity={props.updateCity}
            handleSearchClick={handleSearchClick}
          />
        </div>
      </div>

      <div className="upper-body">
        <div
          className="upper-body-left"
          style={{ display: searchClick ? "block" : "none" }}
        >
          <div
            className="key-info"
            style={{ display: searchClick ? "block" : "none" }}
          >
            <KeyInfo props={props} />
          </div>
          <div
            className="country-info"
            style={{ display: searchClick ? "block" : "none" }}
          >
            <CountryInfo props={props} />
          </div>
          <div
            className="currency"
            style={{ display: searchClick ? "block" : "none" }}
          >
            <Currency props={props} />
          </div>
          <br></br>
          <div
            className="weather"
            style={{ display: searchClick ? "block" : "none" }}
          >
            <Weather props={props} />
          </div>
        </div>

        <div
          className="upper-body-right"
          style={{ display: searchClick ? "block" : "none" }}
        >
          <div
            className="news"
            style={{ display: searchClick ? "block" : "none" }}
          >
            <TopNews props={props} />
          </div>

          <div
            className="events-and-translation-section"
            style={{ display: searchClick ? "block" : "none" }}
          >
            <div
              className="events"
              style={{ display: searchClick ? "block" : "none" }}
            >
              <Events city={props.city} />
            </div>
            <div
              className="translation"
              style={{ display: searchClick ? "block" : "none" }}
            >
              <Translation props={props} />
            </div>
          </div>
          <div className="lower-body-centre">
            <div
              className="translate-phrases"
              style={{ display: searchClick ? "block" : "none" }}
            >
              <TranslatePhrases props={props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
