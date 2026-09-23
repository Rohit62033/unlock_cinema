import { z }
from 'zod'

export const createMovieSchema =
  z.object({

    title:
      z.string()
        .min(2)
        .max(150),

    description:
      z.string()
        .optional(),

    duration:
      z.number()
        .optional(),

    releaseDate:
      z.string()
        .optional(),

    genres:
      z.array(
        z.string()
      ).optional(),

    certification:
      z.string()
        .optional(),
  })