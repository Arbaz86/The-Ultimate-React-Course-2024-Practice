import React from "react";

const Movie = ({ movie, onSelectedMovie, selectedId }) => {
  return (
    <li
      onClick={() => onSelectedMovie(movie.imdbID)}
      className={movie.imdbID === selectedId ? "active-list" : ""}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
