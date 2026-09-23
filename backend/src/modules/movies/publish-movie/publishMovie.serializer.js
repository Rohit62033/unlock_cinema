export const serializePublishedMovie =
  (movie) => {

    return {

      id: movie._id,

      title: movie.title,

      status: movie.status,

      publishedAt:
        movie.publishedAt,

      updatedAt:
        movie.updatedAt,
    }
  }