import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [amount, setAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCurrencyChange = (event) => {
    const value = event.target.value.toUpperCase();
    setCurrencyCode(value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (currencyCode && amount) {
      const apiKey = 'lYgzjJUuEyZmoq2kMBRaecDpR68UQatT';
      const url = `https://api.apilayer.com/exchangerates_data/convert?from=GBP&to=${currencyCode}&amount=${amount}`;

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
          } else {
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
      <h1>Exchange Rate App</h1>
      <form className="exchange-form" onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="currency-input">Currency Code:</label>
          <input
            id="currency-input"
            type="text"
            value={currencyCode}
            onChange={handleCurrencyChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount-input">Amount:</label>
          <input
            id="amount-input"
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button type="submit">Get Exchange Rate</button>
      </form>
      {exchangeRate !== null && (
        <p className="exchange-rate">
          1 GBP = {exchangeRate.toFixed(6)} {currencyCode}
          <br />
          {amount} GBP = {(exchangeRate * amount).toFixed(6)} {currencyCode}
        </p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default App;
