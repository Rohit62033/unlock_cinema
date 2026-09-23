import { v2 as cloudinary }
  from 'cloudinary'

import {
  UPLOAD_TYPES
}
  from './upload.constants.js'

import { AppError }
  from '../../../errors/AppErrors.js'
import { HTTP_STATUS } from '../../../constants/httpStatus.js'
import { ERROR_CODES } from '../../../errors/errorCodes.js'

export const generateUploadSignature =
  async (type, user) => {

    const uploadConfig =
      UPLOAD_TYPES[type]
      
    if (!uploadConfig) {

      throw new AppError(

        'Invalid upload type',

        HTTP_STATUS.BAD_REQUEST,

        ERROR_CODES.INVALID_UPLOAD_TYPE
      )
    }

    if (!uploadConfig.roles.includes(user.role)) {
      throw new AppError("You are not allowed to upload this type of file", HTTP_STATUS.FORBIDDEN,
        ERROR_CODES.UPLOAD_NOT_ALLOWED
      )
    }
    const folder = uploadConfig.getFolder
      ? uploadConfig.getFolder({ user })
      : uploadConfig.folder

        console.log("Upload folder:", folder);

    const timestamp =
      Math.round(
        Date.now() / 1000
      )

    const signature =
      cloudinary.utils.api_sign_request(

        {

          timestamp,

          folder,

        },

        process.env
          .CLOUDINARY_API_SECRET
      )

    return {

      timestamp,

      signature,

      cloudName:
        process.env
          .CLOUDINARY_CLOUD_NAME,

      apiKey:
        process.env
          .CLOUDINARY_API_KEY,

      folder

    }
  }