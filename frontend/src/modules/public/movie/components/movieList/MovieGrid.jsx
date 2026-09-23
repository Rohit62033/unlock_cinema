import MovieCard from "./MovieCard"

const MovieGrid = ({
  movies,
  city
}) => {

  return (
    <div className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      gap-6
    ">

      {
        movies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
            city={city}
          />

        ))
      }

    </div>
  )
}

export default MovieGrid