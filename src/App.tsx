import React from "react";
import Pagination from "./components/Pagination";
import Grid from "./components/Grid";
import { AppProvider } from "./contexts/appContext";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <div className="App" data-testid="app">
        <Grid />
        <Pagination />
      </div>
    </AppProvider>
  );
};

export default App;
