import { asyncHandler }
  from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
  from '../../../constants/httpStatus.js'

import { ApiResponse }
  from '../../../utils/ApiResponse.js'

import * as getMovieDetailsService
  from './getMovieDetails.service.js'

import {
  serializeMovieDetails
}
  from './serializers/movieDetails.serializer.js'

export const getMovieDetails =
  asyncHandler(async (
    req,
    res
  ) => {

    const response =
      await getMovieDetailsService.getMovieDetails(
        req.params.movieId
      )

    /* SERIALIZE */

    const serializedData =
      serializeMovieDetails(
        response
      )

    return res.status(
      HTTP_STATUS.OK
    ).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        serializedData,

        'Movie details fetched successfully'
      )
    )
  })