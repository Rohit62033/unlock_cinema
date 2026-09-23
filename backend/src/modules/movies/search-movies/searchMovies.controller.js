import { asyncHandler }
from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
from '../../../constants/httpStatus.js'

import { ApiResponse }
from '../../../utils/ApiResponse.js'

import * as searchMoviesService
from './searchMovies.service.js'

import {
  serializeSearchMovies
}
from './searchMovies.serializer.js'

export const searchMovies =
  asyncHandler(async (
    req,
    res
  ) => {

    const { q } =
      req.query

      console.log("Logging query at search movie",q);
      

    /* FETCH */

    const movies =
      await searchMoviesService.searchMovies(
        q
      )

    /* SERIALIZE */

    const serializedMovies =
      serializeSearchMovies(
        movies
      )
      
    /* RESPONSE */

    return res.status(
      HTTP_STATUS.OK
    ).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        serializedMovies,

        'Movies fetched successfully'
      )
    )
  })