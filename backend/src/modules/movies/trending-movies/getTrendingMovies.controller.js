import { asyncHandler }
  from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
  from '../../../constants/httpStatus.js'

import { ApiResponse }
  from '../../../utils/ApiResponse.js'



import {
  serializeTrendingMovies
}
  from './getTrendingMovies.serializer.js'

export const getTrendingMovies =
  asyncHandler(async (
    req,
    res
  ) => {

    const movies =
      await getTrendingMoviesService.getTrendingMovies()

    return res.status(
      HTTP_STATUS.OK
    ).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        serializeTrendingMovies(
          movies
        ),

        'Trending movies fetched successfully'
      )
    )
  })