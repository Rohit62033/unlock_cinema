import { MdNotificationsNone } from "react-icons/md"
import { FaArrowLeft } from "react-icons/fa";
import { MOVIE_ROUTES } from "@/constants/admin/navigation/adminMovieRoutes";
import { useNavigate } from "react-router-dom";
import { useMovieSearch } from "../../hooks/useMovieSearch";

const EditMovieHeader = ({
  label,
  searchPlaceholder,
  searchValue,
  onSearchChange,

}) => {

  const navigate = useNavigate()

  const {
    data: movies = [],

    isLoading,
  } = useMovieSearch(
    searchValue
  )

  return (
    <header
      className="
        sticky
        hidden 
        top-0
        z-40
        md:flex
        h-16
        items-center
        justify-between
        border-b
        bg-white
        px-6
        mb-6
      "
    >
      {/* SEARCH */}
      <div className="flex  flex-row gap-2 items-center">
        <button
          onClick={() => { navigate(MOVIE_ROUTES.ROOT) }}
        >
          <FaArrowLeft size={14} className="text-gray-600" />

        </button>
        <p className="text-primary font-semibold">{label}</p>
      </div>


      {/* RIGHT */}

      <div className="flex items-center gap-5 ">


        <div className="relative w-full max-w-md">

          <input
            value={searchValue}
            onChange={(event) =>
              onSearchChange(
                event.target.value
              )
            }
            placeholder={
              searchPlaceholder
            }
            className="
      w-full
      rounded-xs
      border
      bg-gray-200
      px-4
      py-2
      outline-none
    "
          />

          {/* RESULTS */}

          {
            searchValue.length >= 2 && (

              <div
                className="
          absolute
          top-full
          mt-2
          w-full
          overflow-hidden
          rounded-xl
          border
          bg-white
          shadow-lg
          z-50
        "
              >
                {
                  isLoading ? (

                    <div className="p-4 text-sm">
                      Searching...
                    </div>

                  ) : movies.length ? (

                    movies.map((movie) => (

                      <button

                        key={movie.id}

                        type="button"

                        onClick={() => {

                          navigate(

                            `/admin/movies/${movie.id}/edit`
                          )

                          onSearchChange('')
                        }}

                        className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-3
                  text-left
                  hover:bg-gray-100
                "
                      >
                        <span>
                          {movie.title}
                        </span>

                        <span
                          className="
                    text-xs
                    text-gray-400
                  "
                        >
                          {movie.type}
                        </span>
                      </button>
                    ))

                  ) : (

                    <div className="p-4 text-sm text-gray-500">
                      No movies found
                    </div>
                  )
                }
              </div>
            )
          }
        </div>

        <button><MdNotificationsNone size={20} />
        </button>

        <div className="flex items-center gap-3 ">
          <img
            src='https://i.pravatar.cc/100'
            alt='admin'
            className='h-7 w-9 rounded-full object-cover'
          />
        </div>
      </div>
    </header>
  )
}

export default EditMovieHeader