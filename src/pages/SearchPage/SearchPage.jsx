import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = (props) => {
  return (
    <div>
      <SearchBar placeholder="Search" />
    </div>
  );
};

export default SearchPage;
