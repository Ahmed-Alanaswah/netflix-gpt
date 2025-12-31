import { imgCdnPath } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  return (
    <div className="w-36 md:w-48">
      {poster_path ? <img src={imgCdnPath + poster_path} alt="poster" /> : null}
    </div>
  );
};

export default MovieCard;
