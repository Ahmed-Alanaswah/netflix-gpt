import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-lg md:text-3xl px-6 py-2"> {title}</h1>
      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth hide-scrollbar">
        <div className="flex gap-5  snap-center">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
