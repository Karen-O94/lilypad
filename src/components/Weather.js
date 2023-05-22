import "./Weather.css";
import WeatherIcon from "../images/weather_placeholder.png";
import { useEffect, useState } from "react";

function Weather(props) {
    const {latitude, longitude} = props;
    let city1 = "warsaw";
    let lat = latitude;
    let long = longitude;
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    //const [icon, setIcon] = useState('');

    function fromKelvinToCelsius(kelvin) {
        return Math.round((kelvin - 273.15) * 10) / 10;
      }

    useEffect(() => {
        async function getWeatherData() {
            let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
            let queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}`;
    
            const response = await fetch(queryURL, {
                method: 'GET'
            });
            console.log(city1, lat,long)
            let data = await response.json();
            console.log(data)
            setTemperature(fromKelvinToCelsius(data.current.temp) + "°C")
            setHumidity(data.current.humidity + "%")
            }
            
        getWeatherData();
    });

  return (
    <div className="weather-component">
      <h6 id="city"><b>{city1} </b></h6>
      <img
        className="weather-icon"
        src={WeatherIcon}
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