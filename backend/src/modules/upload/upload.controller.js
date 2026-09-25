import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import * as uploadService from "./upload.service.js"


export const createUploadSignature = (
  req,
  res
) => {

  const {
    type,
  } = req.body;

  const user = req.user

  
  console.log("type",type,user.role);

  const data =
    uploadService.createUploadSignature({
      type, user
    });


  return res.status(200).json(

    new ApiResponse(

      HTTP_STATUS.OK,

      data,

      'Upload signature generated'
    )
  )
};