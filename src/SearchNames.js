import React, { useState } from "react";

function SearchNames(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  props.funcToPass(inputValue);

  return (
    <div>
      <input onChange={handleChange} value={inputValue} autoFocus />
    </div>
  );
}

export default SearchNames;
