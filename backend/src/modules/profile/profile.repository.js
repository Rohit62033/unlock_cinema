import mongoose from 'mongoose'
import { HTTP_STATUS } from '../../constants/httpStatus.js'
import { AppError } from '../../errors/AppErrors.js'
import { ERROR_CODES } from '../../errors/errorCodes.js'
import { User } from '../users/models/user.model.js'

export const profileRepository = {
  
  async findById(userId) {
    return User.findById(userId);
  },
  async findProfileById(userId) {
    try {

      return await User.findOne({
        _id: new mongoose.Types.ObjectId(userId),
        isDeleted: false
      }).populate({
        path: 'city',
        select: 'name state'
      }).lean()
    } catch (error) {
      console.error("CRITICAL DB ERROR:", error);
      throw new AppError('"failed to fetch user details', HTTP_STATUS.DATABASE_ERROR, ERROR_CODES.DATABASE_ERROR)
    }
  },

  async updateProfileById(userId, update) {

    try {

      return User.findOneAndUpdate(
        {
          _id: userId,
          isDeleted: false,
        },

        {
          $set: update,
        },
        {
          new: true,
          runValidators: true,
          lean: true,
        }
      )
    } catch (error) {
      throw new AppError('Failed to updated user profile', HTTP_STATUS.DATABASE_ERROR, ERROR_CODES.DATABASE_ERROR)
    }
  },
  async updateAvatarById(userId, avatar) {
    return User.findOneAndUpdate(
      {
        _id: userId,
        isDeleted: false,
      },
      {
        $set: {
          avatar: {
            url: avatar.url,
            public_id: avatar.public_id,
          },
        },
      }, {
      new: true,
      runValidators: true,
      lean: true
    }
    )
  }
}



