export const serializeSearchMovie =
  (movie) => {

    return {

      id: movie._id,

      title: movie.title,

      type: 'movie',
    }
  }

export const serializeSearchMovies =
  (movies) => {

    return movies.map(
      serializeSearchMovie
    )
  }