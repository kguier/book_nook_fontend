import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://www.googleapis.com/books/v1/volumes?q={SEARCH QUERY HERE}")
      .then((response) => response.json())
      .then((json) => {
        const results = json.items.filter((book) => {
          return (
            book &&
            book.volumeInfo &&
            book.volumeInfo.title &&
            book.volumeInfo.title.toLowerCase().includes(value)
          );
        });
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter Book Details Here"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
