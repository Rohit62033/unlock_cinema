import { z }
from 'zod'

export const getMoviesSchema =
  z.object({

    page:
      z.string()
        .optional(),

    limit:
      z.string()
        .optional(),

    search:
      z.string()
        .optional(),

    status:
      z.string()
        .optional(),

    genre:
      z.string()
        .optional(),

    sort:
      z.string()
        .optional(),
  })