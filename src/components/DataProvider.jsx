import React, { Children, cloneElement } from 'react';

const DataProvider = ({children}) => {


    const language = () => {
        console.log("I am language hello")
        let language = "fr"
        return language
    }

    const country = () => {
        console.log("I am country bounjour")
    }

    const currency = () => {
        console.log("I am currency ching ching bling bling")
    }

    const currencyandlanguage = () => {
         currency()
         language()
    }
    
    const dataProvider = {
        getLanguage: language,
        getCountry: country,
        getCurrency: currency,
        getCurrencyAndLanguage: currencyandlanguage
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