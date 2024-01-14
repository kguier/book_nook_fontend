import React from "react";

const Book = ({
  thumbnail,
  title,
  authors,
  description,
  activeIndex,
  setActiveIndex,
  index,
}) => {
  return (
    <div className="book-item">
      <div>{thumbnail}</div>
      <div>{title}</div>
      <div>{authors}</div>
      <div>{description}</div>
    </div>
  );
};

export default Book;
