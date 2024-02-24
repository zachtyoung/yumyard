import React from "react";
import { useParams } from "react-router-dom";
const Search = () => {
  const { query } = useParams();
  return (
    <div>
      <h2>Search Results for "{query}"</h2>
    </div>
  );
};

export default Search;
