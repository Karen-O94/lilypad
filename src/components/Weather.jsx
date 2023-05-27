import "./Weather.css";
import { useEffect, useState } from "react";
// imports style sheet and hooks

function Weather({ props }) {
  const { city, latitude, longitude } = props;
  let city1 = city;
  let lat = latitude;
  let long = longitude;
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState("");

  function fromKelvinToCelsius(kelvin) {
    return Math.round((kelvin - 273.15) * 10) / 10;
    // translates kelvin to celsuis
  }

  useEffect(() => {
    if (latitude) {
      async function getWeatherData() {
        let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4";
        let queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}`;

        try {
          const response = await fetch(queryURL, {
            method: "GET",
          });

          let data = await response.json();

          setTemperature(fromKelvinToCelsius(data.current.temp) + "°C");
          setHumidity(data.current.humidity + "%");
          setIcon(data.current.weather[0].icon);
        } catch (error) {
          alert("There was an error fetching the weather data", error);
        }
      }
      getWeatherData();
    }
  });
  // api request with error handling

  return (
    <div className="weather-component">
      <h6 id="city"><b>{city1} </b></h6>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="placeholder weather icon"
      />
      <div className="weather-info">
        <p id="temp">Temp: {temperature}</p>
        <p id="humidity"> Humidity: {humidity}</p>
      </div>
    </div>
  );
}

export default Weather;
