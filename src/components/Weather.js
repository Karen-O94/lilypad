function Weather () {
    const apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
    var city = "";
    var latitude = "";
    var longitude = "";

    //const cityBtn = document.getElementById("city-btn"); 

    function handleCitySubmit(event) {
        event.preventDefault();
        getCityLongLat();
    };

    //cityBtn.addEventListener("click", getCityLongLat);

    //Gets longitude and latitude co-ordinates from city input
    async function getCityLongLat() {
        //event.preventDefault()
        city = document.getElementById("main-search").value
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        const response = await fetch(queryURL);
        var data = await response.json();
        console.log(data);
        longitude = data.coord.lon
        latitude = data.coord.lat
    }

    return (
        <div class="container-fluid">
            <form className="d-flex" id="search-form" role="search">
            <input className="form-control me-2" id="main-search" type="search" placeholder="What city would you like to visit?" aria-label="Search"/>
            <button className="btn btn-outline-success" onClick={handleCitySubmit} id="city-btn" type="submit">Search</button>
          </form>



            <div class="card">
                {/* <img  alt="Avatar" /> */}
                <div className="container">
                    <h6 id="city"><b>City: </b></h6>
                    <p id="temp">Temp: </p>
                    <p id="humidity"> Humidity: </p>
                </div>
        </div>
        </div>  
     

    );

};

export default Weather;