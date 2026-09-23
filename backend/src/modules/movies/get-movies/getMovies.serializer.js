import { formatDate } from "../../../utils/formatDate.js"

export const serializeMovieCard =
  (movie) => {

    return {

      id: movie._id,

      title: movie.title,

      slug: movie.slug,

      poster:
        movie.poster?.url || null,

      languages: movie?.languages,
      genres:
        movie.genres || [],

      status:
        movie.status,

      releaseDate:
        movie.releaseDate,

      formattedReleaseDate:
        formatDate(
          movie.releaseDate
        ),

      averageRating:
        Number(
          movie.averageRating
            ?.toFixed(1)
        ) || 0,

      totalReviews:
        movie.totalReviews || 0,

      createdAt:
        movie.createdAt,
    }
  }

export const serializeMovies =
  (movies) => {

    return movies.map(
      serializeMovieCard
    )
  }