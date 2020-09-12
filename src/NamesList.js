import React, { useState } from "react";

function NamesList(props) {
  let sortedBabyNames = SortNames(props.babyNames);

  let [namesToDisplay, setNamesToDisplay] = useState(
    JSON.parse(localStorage.getItem("namesToDisplay")) || sortedBabyNames
  );

  let [namesToFavourite, setNamesFavourite] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  ///////////////////////////////////////////////////////////////////////////////////////

  namesToDisplay = namesToDisplay.filter((nameInfo) =>
    nameInfo.name.toLowerCase().startsWith(props.searchString.toLowerCase())
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleToFavourite(event) {
    let nameClicked = event.target.innerText;
    setNamesToDisplay(
      namesToDisplay.filter((names) => names.name !== nameClicked)
    );
    setNamesFavourite(
      namesToFavourite.concat(
        namesToDisplay.filter((names) => names.name === nameClicked)
      )
    );
    localStorage.setItem(
      "favourites",
      JSON.stringify(
        namesToFavourite.concat(
          namesToDisplay.filter((names) => names.name === nameClicked)
        )
      )
    );

    localStorage.setItem(
      "namesToDisplay",
      JSON.stringify(
        namesToDisplay.filter((names) => names.name !== nameClicked)
      )
    );
  }

  function handleToNames(event) {
    let nameClicked = event.target.innerText;
    setNamesToDisplay(
      SortNames(
        namesToDisplay.concat(
          namesToFavourite.filter((names) => names.name === nameClicked)
        )
      )
    );
    /////////////////////////////////////////////////////////////////////////////
    localStorage.setItem(
      "namesToDisplay",
      JSON.stringify(
        SortNames(
          namesToDisplay.concat(
            namesToFavourite.filter((names) => names.name === nameClicked)
          )
        )
      )
    );
    setNamesFavourite(
      namesToFavourite.filter((names) => names.name !== nameClicked)
    );
    ////////////////////////////////////////////////////////////////////////////
    localStorage.setItem(
      "favourites",
      JSON.stringify(
        namesToFavourite.filter((names) => names.name !== nameClicked)
      )
    );
  }
  if (props.radioValue === "male")
    namesToDisplay = namesToDisplay.filter((names) => names.sex === "m");
  if (props.radioValue === "female")
    namesToDisplay = namesToDisplay.filter((names) => names.sex === "f");

  return (
    <div>
      <div className="favourite">
        Favourites:
        {namesToFavourite.map((names, index) => (
          <span
            key={index}
            className={"name " + names.sex}
            onClick={handleToNames}
          >
            {names.name}
          </span>
        ))}
        <hr />
      </div>

      <div className="namelist">
        {namesToDisplay.map((names, index) => (
          <span
            key={index}
            className={"name " + names.sex}
            onClick={handleToFavourite}
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
