import React, { Children, cloneElement } from 'react';
import { useEffect, useState } from "react";
import languageList from './languagecodetable.json'

const DataProvider = ({children}) => {
    const [city, setCity] = useState('warsaw');
    const [country, setCountry] = useState();
    const [longitude, setLongtitude] = useState();
    const [latitude, setLatitude] = useState();
    const [currency, setCurrency] = useState();
    const [language, setLanguage] = useState();
    // const [flag, setFlag] = useState();
    //...
    

    useEffect(()=> {

        const fetchCountry = async () => {
            // let city = dataProvider.getCity()
            let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
            let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&appid=${apiKey}`
            
            const response = await fetch(queryURL, {
                method: 'GET'
            });
            
            let data = await response.json();
            let country = data.sys.country.toLowerCase();
            // console.log(country)
            return country
        }
        
    
        const fetchLongtitude = async () => {
            // let city = dataProvider.getCity()
            let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
            let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            
            const response = await fetch(queryURL, {
                method: 'GET'
            });
            
            let data = await response.json();
            let longitude = data.coord.lon;
            // console.log(longtitude)
            return longitude
        }
    
    
        const fetchLatitude = async () => {
            // let city = dataProvider.getCity()
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
    
    
        const fetchCurrency = async () => {
            if (country) {
                let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=currencies`

                const response = await fetch(queryURL, {
                    method: 'GET'
                });
        
                let data = await response.json();
                // console.log(data)
                return Object.keys(data.currencies)[0].toLowerCase();
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
            
                return languageList[languageThreeDigit]
            }
        }

        // const flag = () => {
        //     console.log("I am flag and I swish in the wind")
        // }

    
        if (!country) {
            fetchCountry().then(c => setCountry(c))
        }
        if (!longitude) {
            fetchLongtitude().then(l => setLongtitude(l))
        }
        if (!latitude) {
            fetchLatitude().then(l => setLatitude(l))
        }
        if (!currency) {
            fetchCurrency().then(c => setCurrency(c))
        }
        if(!language) {
            fetchLanguage().then(l => setLanguage(l))
        }
        // if(!flag) {
        //     fetchFlag().then(l => setFlag(l))
        // }


        // console.log(city,country,language,currency)
    }, [city,country, longitude, latitude, currency, language])


    const props = {
        setCity,
        country,
        longitude,
        latitude,
        currency,
        language,
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