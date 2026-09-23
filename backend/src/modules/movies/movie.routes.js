import express from 'express'

import { protect }
from '../../middlewares/auth.middleware.js'

import { authorizeRoles }
from '../../middlewares/authorizeRoles.js'

/* CREATE */

import {
  createMovie
}
from './create-movie/createMovie.controller.js'

/* UPDATE */

import {
  updateMovie
}
from './update-movie/updateMovie.controller.js'

/* DELETE */

import {
  deleteMovie
}
from './delete-movie/deleteMovie.controller.js'

/* GET MOVIES */

import {
  getMovies
}
from './get-movies/getMovies.controller.js'

/* GET MOVIE */

import {
  getMovieById
}
from './get-movie-by-id/getMovieById.controller.js'

/* DETAILS */

import {
  getMovieDetails
}
from './get-movie-details/getMovieDetails.controller.js'

/* TRENDING */

import {
  getTrendingMovies
}
from './trending-movies/getTrendingMovies.controller.js'

/* SEARCH */

import {
  searchMovies
}
from './search-movies/searchMovies.controller.js'

/* PUBLISH */

import {
  publishMovie
}
from './publish-movie/publishMovie.controller.js'
import { getTrendingSearch } from './trending-search-movies/trendingSearch.controller.js'

const router =
  express.Router()

/* ADMIN */

router.post(
  '/',
  protect,
  authorizeRoles('admin'),
  createMovie
)

router.patch(
  '/:id',
  protect,
  authorizeRoles('admin'),
  updateMovie
)

router.delete(
  '/:id',
  protect,
  authorizeRoles('admin'),
  deleteMovie
)

router.patch(

  '/:id/publish',

  protect,

  authorizeRoles('admin'),

  publishMovie
)

/* PUBLIC */

router.get(
  '/search',
  searchMovies
)

router.get(
  '/trending-movies',
  getTrendingMovies
)

router.get('/trending-search',getTrendingSearch)

router.get(
  '/:movieId/details',
  getMovieDetails
)

router.get(
  '/',
  getMovies
)

router.get(
  '/:id',
  getMovieById
)

export default router