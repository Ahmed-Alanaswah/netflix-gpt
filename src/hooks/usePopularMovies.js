import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      api_options
    );
    const json = await res.json();
    const data = await json.results;

    dispatch(addPopularMovies(data));
  };

  useEffect(() => {
    if (!popularMovies) getMovies();
  }, []);
};

export default usePopularMovies;
