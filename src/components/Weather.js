import "./Weather.css";
import WeatherIcon from "../images/weather_placeholder.png";

function Weather() {
  return (
    <div className="weather_component">
      <img
        className="weather_icon"
        src={WeatherIcon}
        alt="placeholder weather icon"
      />
      <div className="weather_info">
        <p>15°</p>
        <p>Cloudy</p>
      </div>
    </div>
  );
}

export default Weather;
