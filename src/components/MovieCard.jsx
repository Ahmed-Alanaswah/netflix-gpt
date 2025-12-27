import { imgCdnPath } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  console.log("555555", movie);

  return (
    <div className="w-48">
      <img src={imgCdnPath + poster_path} alt="poster" />
    </div>
  );
};

export default MovieCard;
