export const mapGenre =
  (genre) => {
    return {
      id: genre._id,

      name: genre.name,

      slug: genre.slug,

      color: genre.color,

      description:
        genre.description,

      totalMovies:
        genre.totalMovies,

      createdAt:
        genre.createdAt,
    }
  }

export const mapGenres =
  (genres) => {
    return genres.map(mapGenre)
  }