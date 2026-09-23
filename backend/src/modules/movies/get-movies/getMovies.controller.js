import { asyncHandler }
from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
from '../../../constants/httpStatus.js'

import * as getMoviesService
from './getMovies.service.js'

import {
  serializeMovies
}
from './getMovies.serializer.js'
import { ApiResponse } from '../../../utils/ApiResponse.js'

export const getMovies =
  asyncHandler(async (
    req,
    res
  ) => {

    /* FETCH */

    console.log(req.query);
    

    const response =
      await getMoviesService.getMovies(
        req.query, req.cookies.city
      )

    /* SERIALIZE */

    const movies =
      serializeMovies(
        response.movies
      )

    /* RESPONSE */

   return res.status(
  HTTP_STATUS.OK
).json(

  new ApiResponse(

    HTTP_STATUS.OK,

    {
      movies,

      pagination:
        response.pagination,
    }
  )
)
  })