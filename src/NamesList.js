import React from "react";
import babyNames from "./babyNamesData.json";

function NamesList(props) {
  let searched = babyNames.slice(0);
  if (props.searchString.length !== 0) {
    searched = babyNames.filter((nameInfo) =>
      nameInfo.name.startsWith(props.searchString)
    );
  }

  return (
    <div className="namelist">
      {SortNames(searched).map((names, index) => (
        <span key={index} className={"name " + names.sex}>
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
