import React from "react";
import Pagination from "./components/Pagination";
import Grid from "./components/Grid";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Grid />
      <Pagination />
    </div>
  );
};

export default App;
