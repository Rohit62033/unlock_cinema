import { useNavigate } from "react-router-dom";
import { slugifyMovie } from "../../utils/slugifyMovie";
import { Star } from "lucide-react";


const MovieCard = ({ movie, city }) => {

  const navigate = useNavigate();

  const slug = slugifyMovie(movie.title)

  const handleNavigate = () => {

    navigate(
      `/movies/${city}/${slug}/${movie.id}`
    );
  };

  return (
    <div
      onClick={handleNavigate}
      className="
        cursor-pointer
        group
      "
    >

      {/* Poster */}
      <div className="
        relative
        overflow-hidden
        rounded-xl
      ">

        <img
          src={movie.poster}
          alt={movie.title}
          className="
            w-full
            aspect-[2/3]
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        {/* Rating */}
        <div className="
          absolute
          bottom-0
          left-0
          right-0
          bg-black/80
          text-white
          flex
          items-center
          gap-2
          px-3
          py-2
        ">

          <Star
            size={16}
            fill="red"
            color="red"
          />

          <span className="text-sm font-medium">
            {movie.rating}/10
          </span>

          <span className="text-xs text-gray-300">
            {movie.votes} Votes
          </span>

        </div>

      </div>

      {/* Info */}
      <div className="mt-3">

        <h3 className="
          font-semibold
          text-lg
          line-clamp-1
        ">
          {movie.title}
        </h3>

        <p className="
          text-sm
          text-gray-500
          mt-1
        ">
          {movie.genres?.map(genre => genre.name).join(" • ")}
        </p>

      </div>

    </div>
  )
}

export default MovieCard