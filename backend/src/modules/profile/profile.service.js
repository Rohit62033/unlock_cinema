import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { AppError } from "../../errors/AppErrors.js";
import { ERROR_CODES } from "../../errors/errorCodes.js";
import { deleteImage } from "../../infrastructure/cloudinary/cloudinary.service.js";
import { redisService } from "../../utils/redisService.js";
import { profileCacheKeys } from "./cache/profile.cache.js";
import { profileRepository } from "./profile.repository.js";

import { serializeProfile } from "./serializers/profile.serializer.js";
import { pickAllowedFields } from "./utils/pickAllowedFields.js";

export const getProfileById = async (userId) => {

  const cacheKey =
    profileCacheKeys.profile(userId);

  let cachedProfile;

  try {
    cachedProfile = await redisService.get(cacheKey);
  } catch (error) {
    console.log("Error in feteching profile cache");

  }

  if (cachedProfile) {
    return cachedProfile;
  }

  const user = await profileRepository.findProfileById(userId);

  if (!user) {
    throw new AppError("Profile not found", HTTP_STATUS.NOT_FOUND, ERROR_CODES.NOT_FOUND)
  }

  const response =
    serializeProfile(user);

  await redisService.set(
    cacheKey,
    response,
    600
  );

  return response;
}

export const updateProfile = async (userId, body) => {
  const update = pickAllowedFields(body, [
    "firstName",
    "lastName",
    "dob",
    "gender",
    "married",
    "preferences",
  ]);

  const user = await profileRepository.updateProfileById(userId, update)

  if (!user) throw new AppError("User profile not found", HTTP_STATUS.NOT_FOUND, ERROR_CODES.USER_NOT_FOUND)

  await redisService.del(

    profileCacheKeys.profile(userId)

  );

  return serializeProfile(user)
}

export const updateAvatar = async (userId, avatar) => {

  /*
   * 1. Get current avatar
   */
  const user =
    await profileRepository.findById(userId);

  if (!user) {
    throw new AppError(
      "User not found",
      HTTP_STATUS.NOT_FOUND,
      ERROR_CODES.NOT_FOUND
    );
  }

  const oldAvatar = user.avatar;

  /*
* 2. Update database
*/

  const updatedUser = await profileRepository.updateAvatarById(userId, avatar)

  await redisService.del(profileCacheKeys.profile(userId))

  /*
   * 4. Delete old Cloudinary image
   *
   * Only after DB update succeeds.
   */
  if (
    oldAvatar?.public_id &&
    oldAvatar.public_id !== avatar?.public_id
  ) {
    try {

      await deleteImage(
        oldAvatar.public_id
      );

    } catch (error) {

      /*
       * DB is already correct.
       *
       * Don't fail the profile update because
       * Cloudinary cleanup failed.
       */
      console.error(
        "Failed to delete old avatar:",
        error
      );
    }
  }


  return serializeProfile(updatedUser);
};