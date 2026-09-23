export const serializeCreatedMovie =
  (movie) => {

    return {

      id: movie._id,

      title: movie.title,

      slug: movie.slug,

      status: movie.status,

      createdAt:
        movie.createdAt,
    }
  }