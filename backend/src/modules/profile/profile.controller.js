import { HTTP_STATUS } from '../../constants/httpStatus.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import * as profileService from './profile.service.js'

export const getProfileById = async (req, res, next) => {
  try {



    const profile = await profileService.getProfileById(req.user.id)

    return res.status(
      HTTP_STATUS.OK
    ).json(
      new ApiResponse(
        HTTP_STATUS.OK,
        profile,
        "Profile fetched successfully"

      )
    )

  } catch (error) {
    next(error)
  }
}

export const updateProfile = async (req, res, next) => {

  try {

    console.log(req.validatedBody);

    const profile = await profileService.updateProfile(req.user._id, req.validatedBody)

    return res.status(HTTP_STATUS.OK).json(
      new ApiResponse(
        HTTP_STATUS.OK,
        profile,
        "Profile update successfully"
      )
    )

  } catch (error) {
    next(error)
  }
}

export const updateAvatar = async (req, res, next) => {

  try {
    const { url, public_id } = req.validatedBody
    

    const profile = await profileService.updateAvatar(
      req.user.id,
      {
        url,
        public_id,
      }
    )

    return res.status(HTTP_STATUS.OK).json(
      new ApiResponse(
        HTTP_STATUS.OK,
        profile,
        'Avatar updated successfully'
      )
    )


  } catch (error) {
    next(error)
  }
}

// mobile and email updates after ownership verfication so it is implement later when verification platform completes

// export const updateEmail = async()=>{

// }
