import * as movieRepository
  from '../movie.repo.js'

import { redisService }
  from '../../../utils/redisService.js'

import {
  invalidateMovieCaches
}
  from '../shared/movie.cache.js'
import { AppError } from '../../../errors/AppErrors.js'
import { HTTP_STATUS } from '../../../constants/httpStatus.js'
import { ERROR_CODES } from '../../../errors/errorCodes.js'

export const deleteMovie =
  async (movieId) => {

    /* DELETE */

    const deletedMovie =
      await movieRepository.softDeleteMovie(
        movieId
      )

    if (!deletedMovie) {

      throw new AppError("Movie not found", HTTP_STATUS.NOT_FOUND, ERROR_CODES.NO_MOVIE_FOUND)
    }

    /* CACHE INVALIDATION */

    await invalidateMovieCaches(

      redisService,

      movieId
    )

    return deletedMovie
  }