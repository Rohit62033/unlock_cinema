import { movieRepository }
  from '../movie.repo.js'

import { castRepository }
  from '../../cast/cast.repo.js'

import { crewRepository }
  from '../../crew/crew.repo.js'

  import { genreRepository } from '../../genre/repo/genre.repo.js'

import { redisService } from '../../../utils/redisService.js'
import { movieCacheKeys } from '../shared/movie.cache.js'
import { AppError } from '../../../errors/AppErrors.js'

export const getMovieById =
  async (movieId) => {

    /* CACHE KEY */

    const cacheKey =
      movieCacheKeys.editDetails(
        movieId
      )

    /* CACHE */

    const cachedMovie =
      await redisService.get(
        cacheKey
      )

    if (cachedMovie) {

      console.log(
        'EDIT MOVIE CACHE HIT'
      )

      return cachedMovie
    }

    console.log(
      'EDIT MOVIE CACHE MISS'
    )

    /* MOVIE */

    const movie =
      await movieRepository.findMovieForEdit(
        movieId
      )

    if (!movie) {

      throw new AppError(

        'Movie not found',

        HTTP_STATUS.NOT_FOUND,

        ERROR_CODES.NO_MOVIE_FOUND
      )
    }

    const [
      cast,
      crew
    ] = await Promise.all([
      castRepository.getMovieCast(movieId),
      crewRepository.getMovieCrew(movieId)
      
    ])

    // await redisService.set(

    //   cacheKey,

    //   { movie, cast, crew },

    //   300
    // )

    return {

      movie,

      cast,

      crew,
    }
  }