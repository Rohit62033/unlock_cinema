export const serializeRecommendedMovie =
  (movie) => {

    return {
      id: movie._id,

      title: movie.title,

      poster:
        movie.poster || null,

      rating:
  Number(
    movie.averageRating?.toFixed(1)
  ) || 0
    };
  };