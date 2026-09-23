import { movieRepository } from '../movie.repo.js'

import * as reviewRepository
  from '../../review/review.repo.js'

import { castRepository }
  from '../../cast/cast.repo.js'

import { crewRepository }
  from '../../crew/crew.repo.js'

import { redisService }
  from '../../../utils/redisService.js'

import {
  movieCacheKeys
}
  from '../shared/movie.cache.js'

export const getMovieDetails =
  async (movieId) => {

    /* CACHE KEY */

    const cacheKey =
      movieCacheKeys.details(
        movieId
      )

    /* CACHE */

    const cachedMovie =
      await redisService.get(
        cacheKey
      )

    if (cachedMovie) {

      console.log(
        'MOVIE DETAILS CACHE HIT'
      )

      return cachedMovie
    }

    console.log(
      'MOVIE DETAILS CACHE MISS'
    )

    /* MOVIE */

    const movie =
      await movieRepository.findMovieById(
        movieId
      )

    if (!movie) {

      throw new Error(
        'Movie not found'
      )
    }


    /* PARALLEL FETCH */

    const [
      cast,
      crew,
      reviews,
      recommendedMovies
    ] = await Promise.all([

      castRepository.getMovieCast(
        movieId
      ),

      crewRepository.getMovieCrew(
        movieId
      ),

      reviewRepository.getMovieReviewsData(
        movieId
      ),

      movieRepository.getRecommendedMovies(

        movieId,

        movie.genres
      )
    ])    

    /* RESPONSE */

    const response = {

      movie,

      cast,

      crew,

      reviews,

      recommendedMovies,
    }

    /* CACHE STORE */

    // await redisService.set(

    //   cacheKey,

    //   response,

    //   600
    // )

    return response
  }