import "./Weather.css";
import WeatherIcon from "../images/weather_placeholder.png";
import { useEffect, useState } from "react";

function Weather(props) {
    // const {city} = props;
    // const {latitude} = props;
    // const {longitude} = props;
    let city1 = "warsaw";
    let lat = "";
    let long = "";
    //const [cityname, setCityName] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    //const [icon, setIcon] = useState('');

    function fromKelvinToCelsius(kelvin) {
        return Math.round((kelvin - 273.15) * 10) / 10;
      }

    useEffect(() => {
        async function getCityLongLat(){
            let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
            let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}`
                
            const response = await fetch(queryURL, {
                    method: 'GET'
            });
                
            let data = await response.json();
            long = data.coord.lon;
            lat= data.coord.lat;
            getWeatherData();
            }
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
            
        getCityLongLat();
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

// {
//   /* <div className="container-fluid">
// <form className="d-flex" id="search-form" role="search">
// <input className="form-control me-2" id="main-search" type="search" placeholder="What city would you like to visit?" aria-label="Search"/>
// <button className="btn btn-outline-success" onClick={handleCitySubmit} id="city-btn" type="submit">Search</button>
// </form>



// <div className="card">
//     <p id="weather-icon" alt="Displaying Weather icons" style={{margin: 10}}/>
//     <div className="container">
//         <h6 id="city"><b>City: </b></h6>
//         <p id="temp">Temp: </p>
//         <p id="humidity"> Humidity: </p>
//     </div>
// </div>
// </div>   */
// }

//   const apiKey = "c38077db5d2d3cc7511c35c5146ebdb4";
//   var city = "";
//   var latitude = "";
//   var longitude = "";



//   function handleCitySubmit(event) {
//     event.preventDefault();
//     getCityLongLat();
//   }

  //Gets longitude and latitude co-ordinates from city input
//   async function getCityLongLat() {
//     city = document.getElementById("main-search").value;
//     var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     const response = await fetch(queryURL);
//     var data = await response.json();
//     longitude = data.coord.lon;
//     latitude = data.coord.lat;
//     getWeatherInfo();
//   }

  //Function to retrieve weather info using city coordinates from getCityLongLat function
//   async function getWeatherInfo() {
//     var queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`;

//     const response = await fetch(queryURL);
//     var data = await response.json();
//     console.log(data);
//     document.querySelector("#city").innerHTML = city.toUpperCase();
//     document.querySelector("#temp").innerHTML =
//     fromKelvinToCelsius(data.current.temp) + "°C";
//     document.querySelector("#humidity").innerHTML = data.current.humidity + "%";

//     var iconCode = data.current.weather[0].icon;
//     displayWeatherIcon(iconCode);
//   }

//   //Converts temperature from Kelvin to Celsius
//   function fromKelvinToCelsius(kelvin) {
//     return Math.round((kelvin - 273.15) * 10) / 10;
//   }

//   //This function is called to display weather icons
//   function displayWeatherIcon(iconCode) {
//     var iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
//     var dayIcon = document.querySelector(".weather-icon");
//     var img = document.createElement("img");
//     img.src = iconURL;
//     dayIcon.appendChild(img);
//   }