import { movieRepository } from '../movie.repo.js'

import { redisService }
from '../../../utils/redisService.js'

import {
  movieCacheKeys
}
from '../shared/movie.cache.js'

export const getTrendingMovies =
  async () => {

    /* CACHE KEY */

    const cacheKey =
      movieCacheKeys.trending()

    /* CACHE */

    const cachedMovies =
      await redisService.get(
        cacheKey
      )

    if (cachedMovies) {

      console.log(
        'TRENDING CACHE HIT'
      )

      return cachedMovies
    }

    console.log(
      'TRENDING CACHE MISS'
    )

    /* FETCH */

    const movies =
      await movieRepository.getTrendingMovies()

    /* CACHE STORE */

    await redisService.set(

      cacheKey,

      movies,

      1800
    )

    return movies
  }