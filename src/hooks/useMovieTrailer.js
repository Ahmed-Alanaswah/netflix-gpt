import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);

  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      api_options
    );
    const json = await res.json();

    const trailers = json.results?.filter(
      (video) => video?.type?.toLowerCase() == "trailer".toLowerCase()
    );
    const trailer = trailers.length ? trailers[0] : json.results[0];
    //   setTrailerKey(trailer.key);
    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return { trailerKey };
};

export default useMovieTrailer;
