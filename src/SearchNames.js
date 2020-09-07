import React, { useState, useEffect } from "react";

function SearchNames(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  useEffect(() => props.funcToPass(inputValue), [props, inputValue]);

  return (
    <div id="search">
      <input onChange={handleChange} value={inputValue} autoFocus />
    </div>
  );
}

export default SearchNames;
