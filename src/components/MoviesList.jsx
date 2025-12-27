import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log("555555", movies);
  return (
    <div className="px-6 text-white">
      <h1 className="text-3xl px-6 py-2"> {title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-5">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
