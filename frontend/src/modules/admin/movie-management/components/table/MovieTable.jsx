import MovieTableRow from './MovieTableRow'

// import MovieTableSkeleton from '../skeletons/MovieTableSkeleton'

const MovieTable = ({
  movies,
  isLoading,
}) => {
  if (isLoading) {
    // return <MovieTableSkeleton />
    return <p>rohit</p>
  }

  if (!movies.length) {
    return (
      <div className="rounded-2xl border bg-white p-20 text-center ">
        No Movies Found
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white mx-4">
      <table className="w-full">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left">
              Movie
            </th>

            <th className="px-6 py-4 text-left">
              Genres
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Release Date
            </th>

            <th className="px-6 py-4 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <MovieTableRow
              key={movie.id}
              movie={movie}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieTable