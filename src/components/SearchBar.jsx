import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// importing useState hook and MUI components

function SearchBar(props) {
  const [cityInput, setCityInput] = useState();

  const searchActions = () => {
    props.updateCity(cityInput.trim().toUpperCase());
  };
  // city updated with user input

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          data-testid="outlined-basic"
          id="outlined-basic"
          variant="standard"
          autoFocus
          onBlur={(e) => setCityInput(e.currentTarget.value)}
          placeholder="Where next?"
          style={{ width: 160 }}
        />
      </Box>
      <Button
        style={{
          backgroundColor: "#5A815C",
        }}
        variant="contained"
        onClick={() => {
          searchActions();
          props.handleSearchClick();
        }}
      >
        Search
      </Button>
    </>
  );
}

export default SearchBar;
