import { z }
from 'zod'

export const deleteMovieSchema =
  z.object({

    movieId:
      z.string()
        .min(1),
  })