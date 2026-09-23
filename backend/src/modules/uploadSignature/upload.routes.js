import express from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import { authorizeRoles } from '../../middlewares/authorizeRoles.js'
import { generateUploadSignature } from './generate-upload-signature/generateUploadSignature.controller.js'


const router = express.Router()

router.post(

  '/signature',

  protect,

  generateUploadSignature
)

export default router