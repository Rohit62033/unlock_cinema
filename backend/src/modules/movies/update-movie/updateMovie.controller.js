import { asyncHandler }
from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
from '../../../constants/httpStatus.js'

import { ApiResponse }
from '../../../utils/ApiResponse.js'

import * as updateMovieService
from './updateMovie.service.js'

import {
  serializeUpdatedMovie
}
from './updateMovie.serializer.js'

export const updateMovie =
  asyncHandler(async (
    req,
    res
  ) => {

    const movie =
      await updateMovieService.updateMovie(

        req.params.id,

        req.body
      )

    return res.status(
      HTTP_STATUS.OK
    ).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        serializeUpdatedMovie(
          movie
        ),

        'Movie updated successfully'
      )
    )
  })