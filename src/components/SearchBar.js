import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  return (
    <div> <div className="search-bar-container">
    <input type="text" placeholder="Where do you want to go?" className="search-input" />
    <button onClick={() => navigate("results")}>Search</button>
  </div>
</div>
  );
}

export default SearchBar;
