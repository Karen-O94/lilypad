// import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

function App(props) {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/results" element={<Results />} />
  //   </Routes>
  // );
  return (
    <>
      {/* <Home props={props}/> */}
      <Results props={props} />
    </>
  );
}

export default App;
