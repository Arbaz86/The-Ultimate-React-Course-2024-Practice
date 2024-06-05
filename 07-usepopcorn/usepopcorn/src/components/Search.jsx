import React, { useRef } from "react";
import { useKey } from "../hooks/useKey";

const Search = ({ query, onSetQuery }) => {
  const inputEle = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEle.current) return;
    inputEle.current.focus();
    onSetQuery("");
  });

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => onSetQuery(e.target.value)}
        ref={inputEle}
      />
    </div>
  );
};

export default Search;
