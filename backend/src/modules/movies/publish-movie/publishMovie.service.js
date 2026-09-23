import { movieRepository } from '../movie.repo.js'

import { redisService }
  from '../../../utils/redisService.js'

import {
  invalidateMovieCaches
}
  from '../shared/movie.cache.js'
import { AppError } from '../../../errors/AppErrors.js'
import { HTTP_STATUS } from '../../../constants/httpStatus.js'
import { ERROR_CODES } from '../../../errors/errorCodes.js'

export const publishMovie =
  async (movieId) => {

    /* FETCH */

    const movie =
      await movieRepository.findMovieById(
        movieId
      )

    if (!movie) {

      throw new AppError('Movie not found', HTTP_STATUS.NOT_FOUND, ERROR_CODES.NO_MOVIE_FOUND)
    }

    /* VALIDATION */

    if (!movie.title) {

      throw new AppError('Movie title required', HTTP_STATUS.BAD_REQUEST, ERROR_CODES.BAD_REQUEST)
    }

    if (!movie.poster?.url) {

      throw new AppError('Movie poster required', HTTP_STATUS.BAD_REQUEST, ERROR_CODES.BAD_REQUEST)
    }

    if (!movie.releaseDate) {

      throw new AppError('Release date required', HTTP_STATUS.BAD_REQUEST, ERROR_CODES.BAD_REQUEST)
    }

    /* PUBLISH */

    const publishedMovie =
      await movieRepository.publishMovie(
        movieId
      )

    /* CACHE INVALIDATION */

    await invalidateMovieCaches(

      redisService,

      movieId
    )

    return publishedMovie
  }