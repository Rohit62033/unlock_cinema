import express from 'express'

import * as genreController
from '../controller/genre.controller.js'
import { protect } from '../../../middlewares/auth.middleware.js'
import { authorizeRoles } from '../../../middlewares/authorizeRoles.js'

const router = express.Router()

router.post(
  '/',
  protect,
  authorizeRoles('admin'),
  genreController.createGenre
)

router.get(
  '/',

  genreController.getGenres
)

router.patch(
  '/:genreId',

  genreController.updateGenre
)

router.delete(
  '/:genreId',

  genreController.deleteGenre
)

export default router