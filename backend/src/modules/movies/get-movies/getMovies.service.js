import { movieRepository } from '../movie.repo.js'

import { redisService }
  from '../../../utils/redisService.js'

import {
  normalizeMovieQuery,

  buildMovieFilters
}
  from '../shared/movie.query.js'

import {
  movieCacheKeys
}
  from '../shared/movie.cache.js'

export const getMovies =
  async (query, userCity) => {

    /* NORMALIZE */

    const normalizedQuery =
      normalizeMovieQuery(
        query, userCity
      )


    const {
      city,
      language,
      genre,
      page,
      limit,
      skip,
    } = normalizedQuery

    console.log(city);
    

    /* CACHE KEY */

    const cacheKey =
      movieCacheKeys.listing({

        city,

        language,

        genre,

        page,

        limit,

      })

      
      

    /* CACHE CHECK */

    const cachedMovies =
      await redisService.get(
        cacheKey
      )

    if (cachedMovies) {

      console.log(
        'MOVIE CACHE HIT'
      )

      return cachedMovies
    }

    console.log(
      'MOVIE CACHE MISS'
    )
    
    /* FILTERS */

    const filters =
      buildMovieFilters({

        city,

        language,

        genre
      })

    /* FETCH */

    

    const result =
      await movieRepository.findMoviesWithActiveShows({

        filters,

        skip,

        limit,
      })


    /* RESPONSE */

    const response = {

      movies:
        result.movies,

      pagination: {

        page,

        limit,

        totalMovies:
          result.totalMovies,

        totalPages:
          Math.ceil(
            result.totalMovies /
            limit
          ),
      }
    }

    /* STORE CACHE */

    // await redisService.set(

    //   cacheKey,

    //   response,

    //   600
    // )

    return response
  }