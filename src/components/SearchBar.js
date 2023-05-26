import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({setCity}) {
  
  const navigate = useNavigate();
  const [cityInput, setCityInput] = useState();

  const searchActions = () => {
    setCity(cityInput)
    console.log(cityInput)
    navigate("results")

  }

  return (
    <>  
      <input on onBlur={(e) => setCityInput(e.currentTarget.value)} ></input>

      <button onClick={() => searchActions()}>Search</button>
    </>
  );
}

export default SearchBar;
