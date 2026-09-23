import { asyncHandler }
from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
from '../../../constants/httpStatus.js'

import { ApiResponse }
from '../../../utils/ApiResponse.js'

import * as publishMovieService
from './publishMovie.service.js'

import {
  serializePublishedMovie
}
from './publishMovie.serializer.js'

export const publishMovie =
  asyncHandler(async (
    req,
    res
  ) => {

    const movie =
      await publishMovieService.publishMovie(
        req.params.id
      )

    return res.status(
      HTTP_STATUS.OK
    ).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        serializePublishedMovie(
          movie
        ),

        'Movie published successfully'
      )
    )
  })