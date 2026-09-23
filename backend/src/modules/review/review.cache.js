import cache from "../../config/cache.js";

export const getMovieReviewsCacheKey =
  (movieId, page) => {

    return `movie:${movieId}:reviews:${page}`;
  };

export const getMovieRatingCacheKey =
  (movieId) => {

    return `movie:${movieId}:rating`;
  };

export const invalidateMovieReviewCache =
  async (movieId) => {

    await cache.delPattern(
      `movie:${movieId}:reviews:*`
    );
    
    await cache.del(
      getMovieRatingCacheKey(movieId)
    );

    await redisService.del(
  `movie:${movieId}:details`
);
  };

export const invalidateSingleReviewCache =
  async (reviewId) => {

    await cache.del(
      `review:${reviewId}`
    );
  };