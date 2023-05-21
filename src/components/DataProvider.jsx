import React, { Children, cloneElement } from 'react';

const DataProvider = ({children}) => {


    const language = () => {
        let language = "pt"
        return language
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