import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";

function SearchPage() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <SearchBar setResults={setResults} placeholder="Search" />
      <ResultsList results={results} />
    </div>
  );
}

export default SearchPage;
