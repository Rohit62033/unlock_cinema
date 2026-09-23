import { asyncHandler }
from '../../../utils/asyncHandler.js'

import { HTTP_STATUS }
from '../../../constants/httpStatus.js'

import * as createMovieService
from './createMovie.service.js'

import {
  serializeCreatedMovie
}
from './createMovie.serializer.js'
 
export const createMovie =
  asyncHandler(async (
    req,
    res
  ) => {

    const movie =
      await createMovieService.createMovie(

        req.user._id,

        req.body
      )

    res.status(
      HTTP_STATUS.CREATED
    ).json({

      success: true,

      data:
        serializeCreatedMovie(
          movie
        )
    })
  })