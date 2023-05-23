import "./Currency.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  backgroundColor: "#42b883",
  "&:hover": {
    backgroundColor: "#347474",
  },
  borderColor: "#FF7e67",
  borderWidth: "4px",
  borderStyle: "solid",
});

function Currency() {
  return (
    <div className="currency-container">
      <div className="currency-input">
        <h3>EXCHANGE RATE CALCULATOR</h3>
        <Box
          className="text-input"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="£" variant="outlined" />
        </Box>
        <CustomButton variant="contained">Convert</CustomButton>
      </div>
    </div>
  );
}

export default Currency;
