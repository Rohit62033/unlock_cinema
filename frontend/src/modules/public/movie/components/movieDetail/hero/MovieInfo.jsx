import RatingCard from "./RatingCard";
import MovieMeta from "./MovieMeta";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { slugifyMovie } from "@/modules/public/movie/utils/slugifyMovie";

const MovieInfo = ({ movie }) => {

  const navigate = useNavigate()

  const { city } = useSelector((state) => state.location)

  const slug = slugifyMovie(movie.title)

  const movieId = movie.id

  const handleBooking = () => {
    navigate(`/movies/${city?.toLowerCase()}/${slug}/showtimes/${movieId}`)
  }
  return (
    <div className="text-white flex-1">

      <h1 className="text-3xl font-bold">
        {movie.title}
      </h1>

      <div className="mt-6">
        <RatingCard
          rating={movie.averageRating}
          votes={movie.averageRating}
        />
      </div>

      <div className="mt-5">
        <MovieMeta movie={movie} />
      </div>

      <button
        onClick={handleBooking}
        className="mt-10 bg-primary hover:bg-[#ff5c79] transition-all px-14 py-3 rounded-md text-md font-semibold">
        Book tickets
      </button>

    </div>
  );
};

export default MovieInfo;