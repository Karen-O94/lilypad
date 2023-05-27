import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [amount, setAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
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
      const apiKey = 'AcoRUsoipr4ezllPB8m9rIXjy27p4OH8OKCYfESt';
      const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${currencyCode}&base_currency=GBP`;

      axios
        .get(url)
        .then((response) => {
          console.log('API Response:', response.data);

          const { data } = response;

          if (data.error) {
            setExchangeRate(null);
            setConvertedAmount(null);
            setErrorMessage(`Error: ${data.error}`);
          } else if (data.data) {
            const exchangeRate = data.data[currencyCode];
            if (exchangeRate) {
              setExchangeRate(exchangeRate);
              const convertedAmount = (amount * exchangeRate).toFixed(2);
              setConvertedAmount(convertedAmount);
              setErrorMessage('');
            } else {
              setExchangeRate(null);
              setConvertedAmount(null);
              setErrorMessage(`Error: Currency code not found`);
            }
          } else {
            setExchangeRate(null);
            setConvertedAmount(null);
            setErrorMessage('Error: Unable to fetch exchange rate');
          }
        })
        .catch((error) => {
          console.error('Error fetching exchange rate:', error);
          setExchangeRate(null);
          setConvertedAmount(null);
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
      {exchangeRate !== null && convertedAmount !== null && (
        <div className="exchange-rate-info">
          <p className="exchange-rate">
            1 GBP = {exchangeRate.toFixed(6)} {currencyCode}
          </p>
          <p className="converted-amount">
            {amount} GBP = {convertedAmount} {currencyCode}
          </p>
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default App;

