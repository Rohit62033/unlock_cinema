import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { AppError } from "../../errors/AppErrors.js";
import { ERROR_CODES } from "../../errors/errorCodes.js";
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

  // await redisService.set(
  //   cacheKey,
  //   response,
  //   600
  // );

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

  const user = await profileRepository.updateAvatarById(userId, avatar)

  await redisService.del(profileCacheKeys.profile(userId))

  return serializeProfile(user)
}