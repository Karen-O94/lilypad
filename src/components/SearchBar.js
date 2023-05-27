import { useState } from "react";

function SearchBar(props) {
  const [cityInput, setCityInput] = useState();

  const searchActions = () => {
    props.updateCity((cityInput.trim()).toUpperCase())
  }

  return (
    <>
      <input autoFocus onBlur={(e) => setCityInput(e.currentTarget.value)} placeholder="Where do you want to go?"></input>

      <button onClick={() => searchActions()}>Search</button>
    </>
  );
}

export default SearchBar;