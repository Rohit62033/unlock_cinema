import { HTTP_STATUS } from "../../constants/httpStatus.js"
import { AppError } from "../../errors/AppErrors.js"
import { ERROR_CODES } from "../../errors/errorCodes.js"
import { generateUploadSignature } from "../../infrastructure/cloudinary/cloudinary.service.js"

import { UPLOAD_TYPES } from "./upload.constants.js"

export const createUploadSignature = ({
  type, user
}) => {

  console.log(type);
  
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

  return generateUploadSignature({
    folder
  });
}