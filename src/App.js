import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="results" element={<Results />} />
    </Routes>
  );
}

export default App;
