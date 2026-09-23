import { z }
from 'zod'

export const getMovieByIdSchema =
  z.object({

    movieId:
      z.string()
        .min(1),
  })