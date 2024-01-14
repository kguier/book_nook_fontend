import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ResultsList from "../../components/ResultsList/ResultsList";

const BookDetailsPage = ({ book, activeIndex, setActiveIndex }) => {
  const bookItems = results.map((book, i) => (
    <Book
      key={book.title}
      title={book.title}
      authors={book.author}
      description={book.description}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));

  return (
    <div className="book-details">
      <div>{bookItems}</div>
    </div>
  );
};

export default BookDetailsPage;
