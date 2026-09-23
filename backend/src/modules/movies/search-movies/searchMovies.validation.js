import { z }
from 'zod'

export const searchMoviesSchema =
  z.object({

    q:
      z.string()
        .min(1),

    limit:
      z.string()
        .optional(),
  })