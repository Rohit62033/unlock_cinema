import slugify from 'slugify'

import  {genreRepository}
from '../repo/genre.repo.js'

export const createGenre =
  async (payload, userId) => {
    const slug = slugify(
      payload.name,

      {
        lower: true,
        strict: true,
      }
    )

    const existingGenre =
      await genreRepository.findGenreBySlug(
        slug
      )

    if (existingGenre) {
      throw new Error(
        'Genre already exists'
      )
    }

    return genreRepository.createGenre({
      ...payload,

      slug,

      createdBy: userId,
    })
  }

export const getGenres =
  async () => {
    return genreRepository.getGenres()
  }

export const updateGenre =
  async (genreId, payload) => {
    if (payload.name) {
      payload.slug = slugify(
        payload.name,

        {
          lower: true,
          strict: true,
        }
      )
    }

    return genreRepository.updateGenre(
      genreId,
      payload
    )
  }

export const deleteGenre =
  async (genreId) => {
    return genreRepository.softDeleteGenre(
      genreId
    )
  }