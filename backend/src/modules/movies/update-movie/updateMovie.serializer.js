export const serializeUpdatedMovie =
  (movie) => {

    return {

      id: movie._id,

      title: movie.title,

      slug: movie.slug,

      status: movie.status,

      updatedAt:
        movie.updatedAt,
    }
  }