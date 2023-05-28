import { useState } from "react";

function SearchBar(props) {
  const [cityInput, setCityInput] = useState();

  const searchActions = () => {
    props.updateCity(cityInput.toUpperCase())
  }

  return (
    <>
      <input data-testid="city-input" autoFocus onBlur={(e) => setCityInput(e.currentTarget.value)} placeholder="Where do you want to go?"></input>

      <button data-testid="city-btn" onClick={() => searchActions()}>Search</button>
    </>
  );
}

export default SearchBar;