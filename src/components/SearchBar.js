import { Button } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  return (
    <>
      <input></input>
      <button onClick={() => navigate("results")}>Search</button>
    </>
  );
}

export default SearchBar;
