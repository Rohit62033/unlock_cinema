import { serializeMovie }
  from './movie.serializer.js'
import { serializeCast } from "./cast.serializer.js";
import { serializeRecommendedMovie } from "./recommendedMovie.serializer.js";
import { serializeReview } from "./review.serializer.js";


export const serializeMovieDetails =
  ({
    movie,
    cast,
    crew,
    reviews,
    recommendedMovies
  }) => {

    return {

      movie:
        serializeMovie(movie),

      cast:
        cast.map(
          serializeCast
        ),

      crew,

      reviews: {
        summary:
          reviews.summary,

        items:
          reviews.items.map(
            serializeReview
          ),

        pagination:
          reviews.pagination
      },

      recommendedMovies: recommendedMovies.map(serializeRecommendedMovie)
    };
  };