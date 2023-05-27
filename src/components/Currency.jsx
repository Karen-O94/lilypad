import React, { useState } from 'react';
import MoneyIcon from '@mui/icons-material/Money';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';


const Currency = ({props}) => {
  const {currency, currencyName, exchangeRate} = props;
  const [amount, setAmount] = useState(1);


  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  return (
    <div className="currency">
      <div className="container">
        <div className="icon">
          <MoneyIcon />
        </div>
        <div className="text">
          <p>{currencyName}</p>
        </div>
      </div>  

      <div className="container">
          <div className="icon">
            <CurrencyPoundIcon />
          </div>
          <div className="text">
            <p>1 GBP = {exchangeRate} {currency}</p>
          </div>
        </div>

    <br></br>

      <h3>Convert Currency</h3>
          <label htmlFor="amount-input">Amount:</label>
          <input
            id="amount-input"
            type="text"
            placeholder="Enter amount"
            onChange={handleAmountChange}
          />

          <p>{amount} GBP = {(exchangeRate * amount).toFixed(2)} {currency}</p>
    </div>
  );
};

export default Currency;