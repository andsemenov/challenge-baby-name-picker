import React, { useState } from "react";
import NamesList from "./NamesList";
import SearchNames from "./SearchNames";
import babyNames from "./babyNamesData.json";

import "./App.css";
import RadioButton from "./RadioButtons";

function App() {
  let [valuePass, setValuePass] = useState("");
  let [radioValue, setRadioValue] = useState("all");

  function funcToPass(value) {
    setValuePass(value);
  }
  function funcToRadio(value) {
    setRadioValue(value);
  }
  console.log(radioValue);
  return (
    <div>
      <SearchNames funcToPass={funcToPass} />
      <RadioButton funcToRadio={funcToRadio} />
      <NamesList
        searchString={valuePass}
        babyNames={babyNames}
        radioValue={radioValue}
      />
      ;
    </div>
  );
}

export default App;
