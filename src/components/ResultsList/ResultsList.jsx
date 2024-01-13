import React from "react";
import "./ResultsList.css";

const ResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.volumeInfo.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsList;
