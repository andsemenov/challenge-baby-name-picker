import React, { useState } from "react";

function NamesList(props) {
  let sortedBabyNames = SortNames(props.babyNames);
  let [namesToDisplay, setNamesToDisplay] = useState(sortedBabyNames);
  let [namesToFavourite, setNamesFavourite] = useState([]);

  ///////////////////////////////////////////////////////////////////////////////////////
  if (props.searchString.length !== 0) {
    namesToDisplay = sortedBabyNames.filter((nameInfo) =>
      nameInfo.name.toLowerCase().startsWith(props.searchString.toLowerCase())
    );
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleClick(event) {
    let nameClicked = event.target.innerText;
    setNamesToDisplay(
      namesToDisplay.filter((names) => names.name !== nameClicked)
    );
    setNamesFavourite(
      namesToFavourite.concat(
        namesToDisplay.filter((names) => names.name === nameClicked)
      )
    );
  }

  return (
    <div>
      <div className="favourite">
        Favourites:
        {namesToFavourite.map((names, index) => (
          <span
            key={index}
            className={"name " + names.sex}
            onClick={handleClick}
          >
            {names.name}{" "}
          </span>
        ))}
      </div>

      <div className="namelist">
        {namesToDisplay.map((names, index) => (
          <span
            key={index}
            className={"name " + names.sex}
            onClick={handleClick}
          >
            {names.name}
          </span>
        ))}
      </div>
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
