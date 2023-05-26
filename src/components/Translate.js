import "./Translate.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TranslatePhrases from "./TranslatePhrases";
import Translation from "./Translation";
// import DataProvider from "./DataProvider";

function Translate({props}) {
  console.log(props)
  return (
    <div className="translate-container">
      <div className="translate-phrases">
        {/* <DataProvider> */}
          <TranslatePhrases props={props}/>
        {/* </DataProvider> */}
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
        {/* <DataProvider> */}
            <Translation props={props}/>
          {/* </DataProvider> */}
      </div>
    </div>
  );
}

export default Translate;
