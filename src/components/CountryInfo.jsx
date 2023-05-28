import React, { useState, useEffect } from "react";
import "./CountryInfo.css";
// importing react hooks and css file

const CountryInfo = ({ props }) => {
  const { country, timezone } = props;
  const [countryName, setCountryName] = useState();
  const [flag, setFlag] = useState();
  const [coatOfArms, setCoatOfArms] = useState();
  const [population, setPopulation] = useState();
  const [region, setRegion] = useState();
  const [capital, setCapital] = useState();
  // useState to update the component with information coming from the API

  useEffect(() => {
    if (timezone) {
      const fetchCountryData = async () => {
        let queryUrl = `http://localhost:5001/v3.1/alpha/${country}`;

        const response = await fetch(queryUrl);
        let data = await response.json();
        // API call

        setCountryName(data[0].name.official);
        setFlag(data[0].flag);
        setCoatOfArms(data[0].coatOfArms.svg);
        setPopulation(data[0].population);
        setRegion(data[0].subregion);
        setCapital(data[0].capital);
        // updating the states with API information

        return data;
      };

      fetchCountryData();
    }
  });

  return (
    <div>
      <p>
        {flag} {countryName}
      </p>
      <br></br>
      <img src={coatOfArms} alt={countryName} width={"7%"} />
      <br></br>

      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
    </div>
  );
  // return information to component
};

export default CountryInfo;
