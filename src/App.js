import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Results from "./views/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="results" element={<Results />} />
    </Routes>
  );
}

export default App;
