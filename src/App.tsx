import React from "react";
import Pagination from "./components/Pagination";
import Grid from "./components/Grid";
import { PaginationProvider } from "./contexts/paginationContext";
import "./App.css";

const App = () => {
  return (
    <PaginationProvider>
      <div className="App">
        <Grid />
        <Pagination />
      </div>
    </PaginationProvider>
  );
};

export default App;
