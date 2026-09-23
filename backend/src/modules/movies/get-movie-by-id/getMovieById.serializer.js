import { formatDate } from "../../../utils/formatDate.js"

export const serializeMovieById =
  ({
    movie,
    cast,
    crew,
  }) => {

    return {

      id: movie._id,

      title:
        movie.title,

      slug:
        movie.slug,

      description:
        movie.description,

      duration:
        movie.duration,

      releaseDate:
        movie.releaseDate,

      formattedReleaseDate:
        formatDate(
          movie.releaseDate
        ),
      status:
        movie.status,

      certification:
        movie.certification,

      formats:
        movie.formats || [],

      languages:
        movie.languages || [],

      subtitleLanguages: movie.subtitleLanguages || [],

      genres:
        movie.genres || [],

      poster:
        movie.poster || null,

      banner:
        movie.banner || null,

      trailer:
        movie.trailer || null,

      cast:
        cast || [],

      crew:
        crew || [],
    }
  }