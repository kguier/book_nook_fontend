import React from "react";
import { Link } from "react-router-dom";
import "./ResultsList.css";

const ResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((book) => {
        return (
          <div key={book.id}>
            <Link to={"/book-details/${book.id}"}>
              <p>{book.volumeInfo.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ResultsList;
