import React, { useEffect, useRef } from "react";

const Search = ({ query, onSetQuery }) => {
  const inputEle = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (e.code === "Enter") {
        if (document.activeElement === inputEle.current) return;
        inputEle.current.focus();
        onSetQuery("");
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.removeEventListener("keydown", callback);
  }, [onSetQuery]);

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
