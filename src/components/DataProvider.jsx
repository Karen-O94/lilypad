import React, { Children, cloneElement } from 'react';
import { useEffect, useState } from "react";
import languageList from './languagecodetable.json'

const DataProvider = ({children}) => {
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [currency, setCurrency] = useState();
    const [currencyName, setCurrencyName] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [language, setLanguage] = useState();
    const [languageName, setLanguageName] = useState();
    // const [flag, setFlag] = useState();
    //...
    

    useEffect(()=> {

        function fetchCity() {
            let city = "lodz" 
            // console.log(city)
            return city
        }
    

        async function fetchCountry() {
            if (city) {
                let apiKey = "TPeKHqkG6z2eYd8cYAuj4Q==ChId75RDBpyFpona"
                let queryURL = `https://api.api-ninjas.com/v1/city?name=${city}`
                
                const response = await fetch(queryURL, {
                    method: 'GET',
                    headers: {'X-Api-Key': apiKey}
                });
                
                let data = await response.json();
                let country = data[0].country; // this API only ever returns one data point -if this ever returned more than one, we only want one
                // console.log(country)
                return country
            }
        }
        
    
        async function fetchLongitude() {
            if (city) {
                let apiKey = "TPeKHqkG6z2eYd8cYAuj4Q==ChId75RDBpyFpona"
                let queryURL = `https://api.api-ninjas.com/v1/city?name=${city}`
                
                const response = await fetch(queryURL, {
                    method: 'GET',
                    headers: {'X-Api-Key': apiKey}
                });
                
                let data = await response.json();
                let longitude = data[0].longitude;
                // console.log(longitude)
                return longitude
            }
        }
    
    
        async function fetchLatitude() {
            if (longitude) {
                let apiKey = "TPeKHqkG6z2eYd8cYAuj4Q==ChId75RDBpyFpona"
                let queryURL = `https://api.api-ninjas.com/v1/city?name=${city}`
                
                const response = await fetch(queryURL, {
                    method: 'GET',
                    headers: {'X-Api-Key': apiKey}
                });
                
                let data = await response.json();
                let latitude = data[0].latitude;
                // console.log(latitude)
                return latitude
            }
        }
    
    
        async function fetchCurrency() {
            if (country) {
                let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=currencies`

                const response = await fetch(queryURL, {
                    method: 'GET'
                });
        
                let data = await response.json();
                // console.log(data)
                return Object.keys(data.currencies)[0];
            }
        }


        async function fetchCurrencyName() {
            if (country) {
                let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=currencies`

                const response = await fetch(queryURL, {
                    method: 'GET'
                });
        
                let data = await response.json();
                // console.log(data)
                let currencyKey = Object.keys(data.currencies)[0];

                return data.currencies[currencyKey].name;
            }
        }


        async function fetchExchangeRate() {
            if (currency) {
                let apiKey = "AcoRUsoipr4ezllPB8m9rIXjy27p4OH8OKCYfESt"
                let queryURL = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${currency}&base_currency=GBP`
                
                const response = await fetch(queryURL, {
                    method: 'GET',
                });
        
                let data = await response.json();
                // console.log(data)
                let exchangeRate = data.data[currency];

                return exchangeRate
            }
        }
    
    
        async function fetchLanguage() {     
            if (country) {
                let languageThreeDigit
    
    
                let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=languages`
    
                const response = await fetch(queryURL, {
                    method: 'GET'
                });
    
                let data = await response.json();
                languageThreeDigit = Object.keys(data.languages)[0].toLowerCase();
                // console.log(data)
                return languageList[languageThreeDigit]
            }
        }


        async function fetchLanguageName() {     
            if (country) {
                let languageThreeDigit
    
    
                let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=languages`
    
                const response = await fetch(queryURL, {
                    method: 'GET'
                });
    
                let data = await response.json();
                languageThreeDigit = Object.keys(data.languages)[0].toLowerCase();
                // console.log(deata)
                return data.languages[languageThreeDigit]
            }
        }

        // const flag = () => {
        //     console.log("I am flag and I swish in the wind")
        // }
        

        if (!city) {
            setCity(fetchCity())
        }
        if (!country) {
            fetchCountry().then(c => setCountry(c))
        }
        if (!longitude) {
            fetchLongitude().then(l => setLongitude(l))
        }
        if (!latitude) {
            fetchLatitude().then(l => setLatitude(l))
        }
        if (!currency) {
            fetchCurrency().then(c => setCurrency(c))
        }
        if (!currencyName) {
            fetchCurrencyName().then(c => setCurrencyName(c))
        }
        if (!exchangeRate) {
            fetchExchangeRate().then(e => setExchangeRate(e))
        }
        if(!language) {
            fetchLanguage().then(l => setLanguage(l))
        }
        if(!languageName) {
            fetchLanguageName().then(l => setLanguageName(l))
        }
        // if(!flag) {
        //     fetchFlag().then(l => setFlag(l))
        // }


        // console.log(city,country,language,currency)
    }, [city, country, longitude, latitude, currency, currencyName, exchangeRate, language, languageName])


    const props = {
        city,
        country,
        longitude,
        latitude,
        currency,
        currencyName,
        exchangeRate,
        language,
        languageName,
        // flag,
        
    }

    return (
        <div>
            {Children.map(children, child => {
                return cloneElement(child, props, null);
            })}
        </div>
    )
}
export default DataProvider;