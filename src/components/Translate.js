import "./Translate.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Translate() {
  return (
    <div className="translate-container">
      <div className="translate-phrases">
        <h3>KEY PHRASES:</h3>
        <p> 👋 Hello: Hello</p>
        <p> 🙌 Thank you: Thank you</p>
        <p> 🙏 Please: Please </p>
        <p> 🍻 I would like a beer! : I would like a beer!</p>
      </div>
      <div className="translate-input">
        <h3>TRANSLATE</h3>
        <Box
          className="text-input"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="What do you want to say?"
            variant="outlined"
          />
        </Box>
        <Button variant="contained">Translate</Button>
      </div>
    </div>
  );
}

export default Translate;
