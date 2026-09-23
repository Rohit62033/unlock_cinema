import * as genreService
from '../service/genre.service.js'
import { mapGenres } from '../utils/genre.mapper.js'

export const createGenre =
  async (req, res, next) => {
    try {
      const genre =
        await genreService.createGenre(
          req.body,
          req.user.id
        )
                
      return res.status(201).json({
        success: true,

        data: {
          id: genre._id,

      name: genre.name,

      slug: genre.slug,

      color: genre.color,

      description:
        genre.description,

      totalMovies:
        genre.totalMovies,

      createdAt:
        genre.createdAt,
        },
      })
    } catch (error) {
      next(error)
    }
  }

export const getGenres =
  async (req, res, next) => {
    try {
      const genres =
        await genreService.getGenres()        

      return res.status(200).json({
        success: true,

        data: mapGenres(genres),
      })
    } catch (error) {
      next(error)
    }
  }

export const updateGenre =
  async (req, res, next) => {
    try {
      const genre =
        await genreService.updateGenre(
          req.params.genreId,
          req.body
        )

      return res.status(200).json({
        success: true,

        data: mapGenres(genre),
      })
    } catch (error) {
      next(error)
    }
  }

export const deleteGenre =
  async (req, res, next) => {
    try {
      const genre =
        await genreService.deleteGenre(
          req.params.genreId
        )

      return res.status(200).json({
        success: true,

        data: mapGenres(genre),
      })
    } catch (error) {
      next(error)
    }
  }