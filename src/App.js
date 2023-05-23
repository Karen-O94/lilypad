import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import DataProvider from "./components/DataProvider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<DataProvider><Results /></DataProvider>} />
    </Routes>

  );
}

export default App;
