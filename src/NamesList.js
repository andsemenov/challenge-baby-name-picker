import React, { useState } from "react";
import babyNames from "./babyNamesData.json";

function NamesList(props) {
  let searched = babyNames.slice(0);
  let [nameClicked, setNameClicked] = useState("");
  if (props.searchString.length !== 0) {
    searched = babyNames.filter((nameInfo) =>
      nameInfo.name.toLowerCase().startsWith(props.searchString.toLowerCase())
    );
  }
  function handleClick(event) {
    setNameClicked(event.target);
  }
  console.log(nameClicked);
  return (
    <div className="namelist">
      {SortNames(searched).map((names, index) => (
        <span key={index} className={"name " + names.sex} onClick={handleClick}>
          {names.name}
        </span>
      ))}
    </div>
  );
}

function SortNames(array) {
  array = array.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return array;
}

export default NamesList;
