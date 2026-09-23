import { movieRepository } from '../movie.repo.js'

import { redisService }
  from '../../../utils/redisService.js'

import {
  movieCacheKeys
}
  from '../shared/movie.cache.js'

export const searchMovies =
  async (query) => {

    const normalizedQuery =
      query.trim().toLowerCase()

    /* CACHE KEY */

    const cacheKey =
      movieCacheKeys.search(
        normalizedQuery
      )

    /* CACHE */

    const cachedResults =
      await redisService.get(
        cacheKey
      )

    if (cachedResults) {

      console.log(
        'SEARCH CACHE HIT'
      )

      return cachedResults
    }

    console.log(
      'SEARCH CACHE MISS'
    )

    /* FETCH */

    const movies =
      await movieRepository.searchMovies(
        normalizedQuery
      )

    /* CACHE STORE */

    // await redisService.set(

    //   cacheKey,

    //   movies,

    //   300
    // )

    return movies
  }