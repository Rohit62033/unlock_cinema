import MovieCardSkeleton
from "./MovieCardSkeleton";

const MovieGridSkeleton = () => {

  return (
    <div className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      gap-6
    ">

      {
        Array.from({ length: 8 }).map(
          (_, index) => (

            <MovieCardSkeleton
              key={index}
            />

          )
        )
      }

    </div>
  )
}

export default MovieGridSkeleton