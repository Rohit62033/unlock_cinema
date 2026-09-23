import { asyncHandler }
  from '../../../utils/asyncHandler.js'

import { ApiResponse }
  from '../../../utils/ApiResponse.js'

import * as uploadService
  from './generateUploadSignature.service.js'

import { HTTP_STATUS } from '../../../constants/httpStatus.js'

export const generateUploadSignature =
  asyncHandler(async (
    req,
    res
  ) => {

    const { type } =
      req.body


    const data =
      await uploadService.generateUploadSignature(
        type,
        req.user

      )

    return res.status(200).json(

      new ApiResponse(

        HTTP_STATUS.OK,

        data,

        'Upload signature generated'
      )
    )
  })