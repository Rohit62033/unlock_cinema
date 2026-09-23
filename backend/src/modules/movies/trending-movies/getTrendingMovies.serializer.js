export const serializeTrendingMovie =
  (movie) => {

    return {

      id: movie._id,

      title: movie.title,

      slug: movie.slug,

      poster:
        movie.poster?.url || null,

      averageRating:
        Number(
          movie.averageRating
            ?.toFixed(1)
        ) || 0,

      totalReviews:
        movie.totalReviews || 0,

      releaseDate:
        movie.releaseDate,
    }
  }

export const serializeTrendingMovies =
  (movies) => {

    return movies.map(
      serializeTrendingMovie
    )
  }