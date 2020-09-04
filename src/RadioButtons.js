import React, { useState, useEffect } from "react";
function RadioButton(props) {
  let [inputValue, setInputValue] = useState("all");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  useEffect(() => props.funcToRadio(inputValue), [props, inputValue]);
  return (
    <form onChange={handleChange}>
      <input type="radio" id="all" name="gender" value="all" defaultChecked />
      <label htmlFor="all">all</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor="female">female</label>
      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor="male">male</label>
    </form>
  );
}
export default RadioButton;
