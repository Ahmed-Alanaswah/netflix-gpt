import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-50 md:px-12 px-2">
        <MoviesList movies={movies} title={"Now Playing"} />
        <MoviesList movies={movies} title={"Trending"} />
        <MoviesList movies={movies} title={"Upcoming"} />
        <MoviesList movies={movies} title={"Horror"} />
        <MoviesList movies={popularMovies} title={"Popular"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
