import { useNavigate } from 'react-router-dom'

import MovieStatusBadge from '../shared/MovieStatusBadge'

const MovieTableRow = ({ movie }) => {
  const navigate = useNavigate()

  console.log(movie);


  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src={movie.poster}
            alt={movie.title}
            className="
              h-16
              w-12
              rounded-lg
              object-cover
            "
          />

          <div>
            <h3 className="font-semibold">
              {movie.title}
            </h3>

            <p className="text-sm text-gray-500">
              {movie.languages.join(',')}
            </p>
          </div>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {
            (movie.genres || []).map(
              (genre) => (

                <span

                  key={genre._id}

                  className="
          rounded-full
          px-3
          py-1
          text-xs
          font-medium
        "

                  style={{
                    backgroundColor:
                      `${genre.color}20`,

                    color:
                      genre.color,
                  }}
                >
                  {genre.name}
                </span>
              )
            )
          }
        </div>
      </td>

      <td className="px-6 py-4">
        <MovieStatusBadge
          status={movie.status}
        />
      </td>

      <td className="px-6 py-4">
        {movie.formattedReleaseDate}
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-end gap-2">
          <button
            onClick={() =>
              navigate(
                `/admin/movies/${movie.id}/edit`
              )
            }
            className="
              rounded-lg
              border
              px-4
              py-2
            "
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  )
}

export default MovieTableRow