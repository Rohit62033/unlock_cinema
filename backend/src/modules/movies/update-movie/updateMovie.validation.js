import { z }
from 'zod'

export const updateMovieSchema =
  z.object({

    title:
      z.string()
        .min(2)
        .max(150)
        .optional(),

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

    formats:
      z.array(
        z.string()
      ).optional(),

    languages:
      z.array(
        z.string()
      ).optional(),

    status:
      z.string()
        .optional(),
  })