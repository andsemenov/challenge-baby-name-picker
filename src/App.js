import React from "react";
import NamesList from "./NamesList";
import SearchNames from "./SearchNames";
import "./App.css";

function App() {
  return (
    <div>
      <SearchNames />
      <NamesList />;
    </div>
  );
}

export default App;
