import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
const Search = () => {
  const { query } = useParams();
  return (
    <div>
      <h2>
        Search Results for "{query}" <NavBar />
      </h2>
    </div>
  );
};

export default Search;
