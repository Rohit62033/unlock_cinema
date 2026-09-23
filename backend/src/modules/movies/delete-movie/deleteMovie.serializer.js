export const serializeDeletedMovie =
  (movie) => {

    return {

      id: movie._id,

      title: movie.title,

      isDeleted:
        movie.isDeleted,

      deletedAt:
        movie.deletedAt,
    }
  }