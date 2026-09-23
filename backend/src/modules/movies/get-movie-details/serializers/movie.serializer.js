import { formatDuration }
from '../utils/formatDuration.js'

export const serializeMovie =
  (movie) => {

    const releaseDate =
      movie.releaseDate
        ? new Date(
            movie.releaseDate
          )
        : null

    return {

      id: movie._id,

      title: movie.title,

      description:
        movie.description ||
        null,

      poster:
        movie.poster?.url ||
        null,

      banner:
        movie.banner?.url ||
        null,

      genres:
        movie.genres || [],

      languages:
        movie.languages || [],

      duration:
        movie.duration,

      formattedDuration:
        formatDuration(
          movie.duration
        ),

      releaseDate:
        movie.releaseDate,

      releaseYear:
        releaseDate
          ? releaseDate.getFullYear()
          : null,

      certification:
        movie.certification,

      formats:
        movie.formats || [],

      averageRating:
        Number(
          movie.averageRating
            ?.toFixed(1)
        ) || 0,

      totalReviews:
        movie.totalReviews || 0,
    }
  }