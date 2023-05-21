import React, { Children, cloneElement } from 'react';
import { useEffect } from "react";
import languageList from './languagecodetable.json'

const DataProvider = ({children}) => {

    const city = () => {
        let city = "lisbon"
        return city
    }
    
    
    const country = async () => {
        let city = dataProvider.getCity()
        let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        
        const response = await fetch(queryURL, {
            method: 'GET'
        });
        
        let data = await response.json();
        let country = data.sys.country.toLowerCase();
        // console.log(country)
        return country
    }
    

    const longtitude = async () => {
        let city = dataProvider.getCity()
        let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        
        const response = await fetch(queryURL, {
            method: 'GET'
        });
        
        let data = await response.json();
        let longtitude = data.coord.lon;
        // console.log(longtitude)
        return longtitude
    }


    const latitude = async () => {
        let city = dataProvider.getCity()
        let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        
        const response = await fetch(queryURL, {
            method: 'GET'
        });
        
        let data = await response.json();
        let latitude = data.coord.lat;
        // console.log(latitude)
        return latitude
    }


    const currency = async () => {
        let currency
        let countryCode
        await dataProvider.getCountry().then(async country => {
            countryCode = country
            let queryURL = `http://localhost:5001/v3.1/alpha/${countryCode}?fields=currencies`

            const response = await fetch(queryURL, {
                method: 'GET'
            });
    
            let data = await response.json();
            currency = Object.keys(data.currencies)[0].toLowerCase();

        })
       
        // console.log(currency)
        return currency
    }


    const language = async () => {
        let language
        let languageThreeDigit
        let countryCode
        await dataProvider.getCountry().then(async country => {
            countryCode = country
            let queryURL = `http://localhost:5001/v3.1/alpha/${countryCode}?fields=languages`

            const response = await fetch(queryURL, {
                method: 'GET'
            });
    
            let data = await response.json();
            languageThreeDigit = Object.keys(data.languages)[0].toLowerCase();
            language = languageList[languageThreeDigit]

        })
       
        // console.log(languageThreeDigit, language)
        return language
    }


    const flag = () => {
        console.log("I am flag and I swish in the wind")
    }


    // const currencyandlanguage = () => {
    //      currency()
    //      language()
    // }

    
    const dataProvider = {
        getCity: city,
        getCountry: country,
        getLongtitude: longtitude,
        getLatitude: latitude,
        getCurrency: currency,
        getLanguage: language,
        // getCurrencyAndLanguage: currencyandlanguage,
        getFlag: flag
    }

    return (
        <div>
            {Children.map(children, child => {
                return cloneElement(child, {dataProvider}, null);
            })}
        </div>
    )
}
export default DataProvider;