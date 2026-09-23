import { slugifyMovie } from "@/modules/public/movie/utils/slugifyMovie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StickyMovieBar = ({ movie }) => {

  const [showBar, setShowBar] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 520) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  const navigate = useNavigate()

  const { city } = useSelector((state) => state.location)

  const slug = slugifyMovie(movie.title)

  const movieId = movie.id

  const handleBooking = () => {
    navigate(`/movies/${city?.toLowerCase()}/${slug}/showtimes/${movieId}`)
  }
  return (
    <div
      className={`
        hidden md:block
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white 
        transition-all
        duration-700
        shadow-md

        ${showBar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
        }
      `}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-3
          flex
          items-center
          justify-between
        "
      >

        {/* Movie Info */}
        <div>

          <h2 className="text-gray-700 font-bold text-md xl:text-lg">
            {movie.title}
          </h2>

          <p className="text-sm text-gray-400">
            {movie.languages.join(", ")}
          </p>

        </div>

        {/* CTA */}
        <button

          onClick={handleBooking}
          className="
            bg-[#F84464]
            hover:bg-[#ff5c79]
            transition-all
            text-white
            px-6
            py-2
            rounded-lg
            font-semibold
          "
        >
          Book tickets
        </button>

      </div>

    </div>
  );
};

export default StickyMovieBar;