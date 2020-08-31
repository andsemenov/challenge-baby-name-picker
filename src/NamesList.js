import React from "react";
import babyNames from "./babyNamesData.json";

function NamesList() {
  console.log(babyNames);
  console.log(SortNames(babyNames));
  return (
    <div className="namelist">
      {SortNames(babyNames).map((names) => (
        <span className={"name " + names.sex}>{names.name}</span>
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
