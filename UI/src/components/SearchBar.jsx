import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the search page with the search query as a URL parameter
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className="home__search_bar">
      <form onSubmit={handleSubmit}>
        <input
          className="home__search_input"
          type="text"
          placeholder="Search YumYard"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
