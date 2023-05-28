import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBar(props) {
  const [cityInput, setCityInput] = useState();

  const searchActions = () => {
    props.updateCity(cityInput.toUpperCase());
  };

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
          id="outlined-basic"
          variant="outlined"
          autoFocus
          onBlur={(e) => setCityInput(e.currentTarget.value)}
          placeholder="Where next?"
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
