import express from "express";
import { protect } from "../../middlewares/auth.middleware.js";
import {  getProfileById, updateAvatar, updateProfile } from "./profile.controller.js";
import { validateBody } from "../../middlewares/validate.middleware.js";
import { updateAvatarSchema, updateProfileSchema } from "./validators/profile.validation.js";


const router = express.Router()

router.get('/', protect, getProfileById);

router.patch("/", protect, validateBody(updateProfileSchema), updateProfile);

router.patch(
  "/avatar",
  protect,validateBody(updateAvatarSchema),
  updateAvatar
);



export default router;