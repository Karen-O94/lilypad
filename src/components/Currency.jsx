import { useEffect, useState } from "react";
import axios from 'axios';

function Currency(props) {
    const {currency} = props;
    
    const [currencyCode, setCurrencyCode] = useState('');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCurrencyChange = (event) => {
        const value = event.target.value.toUpperCase();
        setCurrencyCode(value);
      };
    
    const handleFormSubmit = (event) => {
    event.preventDefault();

    if (currencyCode) {
        const apiKey = 'lYgzjJUuEyZmoq2kMBRaecDpR68UQatT';
        const url = `https://api.apilayer.com/exchangerates_data/convert?from=GBP&to=${currencyCode}&amount=1`;

        axios
        .get(url, {
            headers: {
            apikey: apiKey,
            },
        })
        .then((response) => {
            const { success, info, result } = response.data;

            if (success) {
            setExchangeRate(result);
            setErrorMessage('');
            } 
            else {
            setExchangeRate(null);
            setErrorMessage(`Error: ${info}`);
            }
        })
        .catch((error) => {
            console.error('Error fetching exchange rate:', error);
            setExchangeRate(null);
            setErrorMessage('Error: Unable to fetch exchange rate');
        });
        }
      };

    return (
        <div className="app">
          {exchangeRate !== null && (
            <p className="exchange-rate">
              1 GBP = {exchangeRate.toFixed(6)} {currencyCode}
            </p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      );
    }      

export default Currency;