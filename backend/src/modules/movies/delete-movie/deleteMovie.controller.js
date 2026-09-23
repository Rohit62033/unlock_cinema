import { asyncHandler }
from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
from '../../../constants/httpStatus.js'

import { ApiResponse }
from '../../../utils/ApiResponse.js'

import * as deleteMovieService
from './deleteMovie.service.js'

import {
  serializeDeletedMovie
}
from './deleteMovie.serializer.js'

export const deleteMovie =
  asyncHandler(async (
    req,
    res
  ) => {

    const movie =
      await deleteMovieService.deleteMovie(
        req.params.id
      )

    return res.status(
      HTTP_STATUS.OK
    ).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        serializeDeletedMovie(
          movie
        ),

        'Movie deleted successfully'
      )
    )
  })