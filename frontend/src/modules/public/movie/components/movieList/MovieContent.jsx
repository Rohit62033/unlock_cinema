import { fetchMovies } from "@/store/movie/movieThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MobileFilterButton from "./MobileFilterButton";
import MovieGridSkeleton from "../../skeletons/MovieGridSkeleton";
import MovieGrid from "./MovieGrid";


const MovieContent = () => {

  const dispatch = useDispatch()

  const [searchParams] =
    useSearchParams();

  const { city } = useSelector((state) => state.location)

  const {
    filteredMovies,
    loading
  } = useSelector(
    (state) => state.movies
  );


  useEffect(() => {
    const params = {
      city,
      page: searchParams.get('page') || 1,
      language: searchParams.get('languages'),
      genre: searchParams.get('genres')
    }

    dispatch(fetchMovies(params))
  }, [searchParams, city])


  return (
    <div>

      <MobileFilterButton />

      <h1 className="
        text-2xl lg:text-3xl
        font-bold
        mb-6
      ">
        Movies In {city}
      </h1>
      {
        loading ? <MovieGridSkeleton />
          : filteredMovies.length ? (

            <MovieGrid
              movies={filteredMovies}
              city={city}
            />

          ) : (
            <div className="flex flex-col items-center justify-center">

              <img
                className="max-w-xs"
                src="https://assets-in.bmscdn.com/discovery-catalog/lib/tr:w-400/no-results-found-202007011731.png" alt=""
                loading="lazy" />
              <h3 className="mt-5 text-md text-black/90 font-semibold">Caught up in the filter-maze</h3>
              <p className="text-gray-500 text-sm mt-2">Your filter combination didn't fetch any results...</p>
              <p className="text-gray-500 text-sm">Kindly reset to discover more</p>
              <button className="max-w-xs w-full bg-primary text-white mt-8 py-1.5 rounded">
                Reset Filters
              </button>
            </div>
          )
      }

    </div>
  )
}

export default MovieContent