import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
const GptMoviesList = () => {
  const searcMoviesResults = useSelector(
    (store) => store.gpt.searchoviesResults
  );

  return (
    <div className="p=4 m-4 text-white bg-black/50">
      <div>
        {searcMoviesResults ? (
          <MoviesList movies={searcMoviesResults} title={"Your Favorite"} />
        ) : (
          <h1>No Recommended Movies Found</h1>
        )}
      </div>
    </div>
  );
};

export default GptMoviesList;
