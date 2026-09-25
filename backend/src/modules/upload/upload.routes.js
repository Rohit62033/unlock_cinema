import express from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import { createUploadSignature } from './upload.controller.js'




const router = express.Router()

router.post(

  '/signature',

  protect,

  createUploadSignature
)

export default router