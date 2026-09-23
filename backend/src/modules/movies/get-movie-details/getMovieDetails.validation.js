import { z }
from 'zod'

export const getMovieDetailsSchema =
  z.object({

    movieId:
      z.string()
        .min(1),
  })