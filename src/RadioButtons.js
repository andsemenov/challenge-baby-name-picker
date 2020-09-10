import React, { useState, useEffect } from "react";
function RadioButton(props) {
  let [inputValue, setInputValue] = useState("all");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  useEffect(() => props.funcToRadio(inputValue), [props, inputValue]);
  return (
    <form onChange={handleChange}>
      <div className="form_radio_btn">
        <input type="radio" id="all" name="gender" value="all" defaultChecked />
        <label htmlFor="all">
          <img alt="all" src="/all.jpg" />
        </label>
      </div>
      <div className="form_radio_btn">
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">
          <img alt="female" src="/female.jpg" />
        </label>
      </div>
      <div className="form_radio_btn">
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">
          <img alt="male" src="/male.jpg" />
        </label>
      </div>
    </form>
  );
}
export default RadioButton;
