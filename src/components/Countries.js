import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all"

const Countries = () => {
  const [countries, setCountries] = useState([])

  const fetchCountries = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    console.log(countries)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <>
      {countries((Country) => {
        const {
          numericCode, 
          name, 
          population, 
          region, 
          capital, 
          flag
        } = Country

        return (
          <article key={numericCode}>
            <div>
              <img src = {flag} alt ={name} />
              <h3>{name}</h3>
              <h4>
                Population{population}
              </h4>
              <h4>
                Region{region}
              </h4>
              <h4>  
                Capital{capital}
              </h4>    
            </div>
          </article>
        )
      })}
    </>
  )
    }
export default Countries
