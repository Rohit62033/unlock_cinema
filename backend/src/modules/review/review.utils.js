import { Movie } from '../movies/movie.model.js'

import * as reviewRepository
  from "./review.repo.js";

export const updateMovieRatingStats =
  async (movieId) => {

    console.log(movieId);

    const stats =
      await reviewRepository.aggregateMovieRatings(
        movieId
      );

    console.log(stats);

    const averageRating =
      stats[0]?.averageRating.toFixed(1) || 0;

    const totalReviews =
      stats[0]?.totalReviews.toFixed(1) || 0;

    await Movie.findByIdAndUpdate(
      movieId,
      {
        averageRating,
        totalReviews
      }
    );
  };