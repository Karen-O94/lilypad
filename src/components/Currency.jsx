import React, { useState } from "react";
import "./Currency.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Currency = ({ props }) => {
  const { currency, exchangeRate } = props;
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  return (
    <div className="currency">
      <br></br>

      <div className="conversion-container">
        <h4>Conversion:</h4>
        <label htmlFor="amount-input">Amount:</label>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            autoFocus
            onChange={handleAmountChange}
            placeholder="Enter amount"
            style={{ width: 160 }}
          />
        </Box>

        <p>
          {amount} GBP = {(exchangeRate * amount).toFixed(2)} {currency}
        </p>
      </div>
    </div>
  );
};

export default Currency;
