import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayinMovies";
import MainContainer from "./MainContainer";
const Browse = () => {
  // const [movies, setMovies] = useState();
  // const nowPlayingMovies = useSelector((state) => state.nowPlayingMovies);
  useNowPlayingMovies();
  return (
    <div className="relative">
      <Header />
      <MainContainer />

      <div>
        {/* {nowPlayingMovies.map((movie) => (
          <div key={movie.id}>{movie.id}</div>
        ))} */}
      </div>
    </div>
  );
};

export default Browse;
