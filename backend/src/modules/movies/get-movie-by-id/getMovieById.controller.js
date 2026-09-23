import { asyncHandler }
from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
from '../../../constants/httpStatus.js'

import { ApiResponse }
from '../../../utils/ApiResponse.js'

import * as getMovieByIdService
from './getMovieById.service.js'

import {
  serializeMovieById
}
from './getMovieById.serializer.js'

export const getMovieById =
  asyncHandler(async (
    req,
    res
  ) => {

    const movie =
      await getMovieByIdService.getMovieById(
        req.params.id
      )

    return res.status(
      HTTP_STATUS.OK
    ).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        serializeMovieById(
          movie
        ),

        'Movie fetched successfully'
      )
    )
  })