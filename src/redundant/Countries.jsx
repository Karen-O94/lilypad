import React, { useState, useEffect } from "react";

const Countries = ({ props }) => {
  // const [countries, setCountries] = useState([])
  const {country,timezone} = props;
  const [countryName, setCountryName] = useState();
  const [flag, setFlag] = useState();
  const [coatOfArms, setCoatOfArms] = useState();
  const [population, setPopulation] = useState();
  const [region, setRegion] = useState();
  const [capital, setCapital] = useState();

  useEffect(() => {

    if (timezone) {

      const fetchCountryData = async () => {
        let queryUrl = `http://localhost:5001/v3.1/alpha/${country}`;

        try {
            const response = await fetch(queryUrl);
            let data = await response.json();
            setCountryName(data[0].name.official)
            setFlag(data[0].flag)
            setCoatOfArms(data[0].coatOfArms.svg)
            setPopulation(data[0].population)
            setRegion(data[0].subregion)
            setCapital(data[0].capital)

            // console.log(data);
            return data;
        }
        catch (error) {
            alert("There was an error fetching the countries data", error);
        }
        
      }
      fetchCountryData();

    }

  });

  return (
      <div>
        <h3>{countryName} {flag}</h3>
        <img src = {coatOfArms} alt ={countryName} width={"7%"}/>
        <p>  
          Capital: {capital}
        </p>   
        <p>
          Population: {population}
        </p>
        <p>
          Region: {region}
        </p>
 
      </div>
  )

};

    

export default Countries;
