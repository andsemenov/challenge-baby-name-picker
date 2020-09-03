import React, { useState } from "react";
import NamesList from "./NamesList";
import SearchNames from "./SearchNames";
import babyNames from "./babyNamesData.json";

import "./App.css";

function App() {
  let [valuePass, setValuePass] = useState("");

  function funcToPass(value) {
    setValuePass(value);
  }

  return (
    <div>
      <SearchNames funcToPass={funcToPass} />
      <NamesList searchString={valuePass} babyNames={babyNames} />;
    </div>
  );
}

export default App;
