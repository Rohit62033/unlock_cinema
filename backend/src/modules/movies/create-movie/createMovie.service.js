import slugify
  from 'slugify'



import {
  MOVIE_STATUS
}
  from '../shared/movie.constants.js'

import { movieRepository } from '../movie.repo.js'

import { AppError }
  from '../../../errors/AppErrors.js'

import { ERROR_CODES }
  from '../../../errors/errorCodes.js'

import { HTTP_STATUS }
  from '../../../constants/httpStatus.js'

export const createMovie =
  async (
    userId,
    payload
  ) => {


    
    /* SLUG */

    const slug =
      slugify(
        payload.title,

        {
          lower: true,

          strict: true,
        }
      )

    /* DUPLICATE CHECK */

    const existingMovie =
      await movieRepository.findMovieBySlug(
        slug
      )

    if (existingMovie) {

      throw new AppError(

        'Movie already exists',

        HTTP_STATUS.CONFLICT,

        ERROR_CODES.MOVIE_ALREADY_EXISTS
      )
    }

    /* CREATE */

    const movie =
      await movieRepository.createMovie(
        {

          ...payload,

          slug,

          status:
            MOVIE_STATUS.DRAFT,

          createdBy:
            userId,
        }
      )

    return movie
  }