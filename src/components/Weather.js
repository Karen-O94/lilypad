import "./Weather.css";
import WeatherIcon from "../images/weather_placeholder.png";

function Weather() {
  return (
    <div className="weather-component">
      <img
        className="weather-icon"
        src={WeatherIcon}
        alt="placeholder weather icon"
      />
      <div className="weather-info">
        <p>15°</p>
        <p>Cloudy</p>
      </div>
    </div>
  );
}

export default Weather;
