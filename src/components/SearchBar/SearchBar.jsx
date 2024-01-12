import React, { useState } from "react";

function SearchBar({ placeholder, data }) {
  return (
    <div ckassName="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default SearchBar;
