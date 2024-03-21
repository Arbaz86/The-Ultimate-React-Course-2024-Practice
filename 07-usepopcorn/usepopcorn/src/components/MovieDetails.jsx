import React, { useEffect } from "react";
const KEY = "f4baae59";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
  useEffect(() => {
    async function getMovieDetails() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      console.log(data);
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        ⬅
      </button>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
