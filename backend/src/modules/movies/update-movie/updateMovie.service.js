import slugify
from 'slugify'

import { movieRepository } from '../movie.repo.js'

import { redisService }
from '../../../utils/redisService.js'

import {
  invalidateMovieCaches
}
from '../shared/movie.cache.js'

export const updateMovie =
  async (
    movieId,
    payload
  ) => {
    

    /* SLUG UPDATE */

    if (payload.title) {

      payload.slug =
        slugify(

          payload.title,

          {
            lower: true,

            strict: true,
          }
        )
    }

    /* UPDATE */

    const updatedMovie =
      await movieRepository.updateMovie(

        movieId,

        payload
      )

    if (!updatedMovie) {

      throw new Error(
        'Movie not found'
      )
    }

    /* CACHE INVALIDATION */

    await invalidateMovieCaches(

      redisService,

      movieId
    )

    return updatedMovie
  }