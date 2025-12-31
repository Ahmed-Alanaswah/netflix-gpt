import { useRef } from "react";
import { client } from "../utils/openAiUtils";
import { api_options } from "../utils/constants";
import { addSerchMoviesResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (searchQuery) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchQuery
      )}&include_adult=false&language=en-US&page=1`,
      api_options
    );

    const json = await res.json();
    const results = await json.results;

    return results;
  };
  const hanldeSearchMovies = async () => {
    const querySearch =
      "work  as recommended movies system and give top 5 movies for this query " +
      searchText.current.value +
      ", comma seperated like this example : move1 , movie2 , movie3 ...";
    try {
      const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: querySearch }],
      });
      console.log("44444", completion.choices[0].message.content);
      console.log(completion.choices[0].message.content);
      const gptMovies = completion.choices[0].message.content.split(",");

      const promisesArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const results = await Promise.all(promisesArray);

      dispatch(addSerchMoviesResults(results));
    } catch (error) {
      const results = await searchMovieTMDB(searchText.current.value);
      dispatch(addSerchMoviesResults(results));
    }
  };
  return (
    <div className="bg-black w-1/2 p-4 m-auto ">
      <form className="flex gap-5" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder="serach about your recommended movies or if no result enter one movie name to find it for you"
          className="py-2 px-4 bg-white w-3/4"
        />
        <button
          className="py-2 px-4 bg-red-700 text-white w-1/4"
          onClick={hanldeSearchMovies}
        >
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
