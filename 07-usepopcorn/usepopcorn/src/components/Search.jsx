import React from "react";

const Search = ({ query, onSetQuery }) => {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => onSetQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
