import React, { Children, cloneElement } from 'react';

const DataProvider = ({children}) => {

    const city = () => {
        let city = "paris"
        return city
    }
    
    
    const country = () => {
        console.log("I am currency ching ching bling bling")
        let country = "France"
        return country
    }
    

    const longtitude = async () => {
        let city = dataProvider.getCity()
        let apikey = "c38077db5d2d3cc7511c35c5146ebdb4"
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        
        const response = await fetch(queryURL, {
            method: 'GET'
        });
        
        let data = await response.json();
        let longtitude = data.coord.lon;
        console.log(longtitude)
        return longtitude
    }


    const latitude = async () => {
        let city = dataProvider.getCity()
        let apikey = "c38077db5d2d3cc7511c35c5146ebdb4"
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        
        const response = await fetch(queryURL, {
            method: 'GET'
        });
        
        let data = await response.json();
        let latitude = data.coord.lat;
        console.log(latitude)
        return latitude
    }


    const currency = () => {
        console.log("I am currency ching ching bling bling")
    }


    const language = () => {
        let language = "uk"
        return language
    }


    const flag = () => {
        console.log("I am flag and I swish in the wind")
    }


    const currencyandlanguage = () => {
         currency()
         language()
    }

    
    const dataProvider = {
        getCity: city,
        getCountry: country,
        getLongtitude: longtitude,
        getLatitude: latitude,
        getCurrency: currency,
        getLanguage: language,
        getCurrencyAndLanguage: currencyandlanguage,
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