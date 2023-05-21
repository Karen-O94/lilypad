import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [countryTag, setCountryTag] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=55e6bd24eae746fdb830f16fe3612f87&symbols=${countryTag}`
      );
      const rate = response.data.rates[countryTag];
      setExchangeRate(rate);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setCountryTag(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExchangeRate();
  };

  return (
    <div className="card">
      <h1>Exchange Rate Checker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Country Tag:
          <input
            type="text"
            value={countryTag}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Get Exchange Rate</button>
      </form>
      {exchangeRate && (
        <p>
          Exchange Rate for {countryTag}: {exchangeRate}
        </p>
      )}
    </div>
  );
}

export default App;
