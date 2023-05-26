import React, { Children, cloneElement } from 'react';
import { useEffect, useState } from "react";
import languageList from '../json/languagecodetable.json'

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
    const [locationPhoto, setLocationPhoto] = useState();
    // const [flag, setFlag] = useState();
    //...


    useEffect(()=> {

        function fetchCity() {
            let city = "paris" 
            // console.log(city)
            return city
    }

    const country = () => {
        console.log("I am country bounjour")
        

    }

    const currency = () => {
        console.log("I am currency ching ching bling bling")
    }

    const flag = () => {
        console.log("I am flag and I swish in the wind")
    }

    const currencyandlanguage = () => {
         currency()
         language()
    }
    
    const dataProvider = {
        getLanguage: language,
        getCountry: country,
        getCurrency: currency,
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