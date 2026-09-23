import { z } from 'zod'

export const createGenreSchema =
  z.object({
    name: z
      .string()
      .min(2)
      .max(50),

    color: z.string().optional(),

    description:
      z.string().optional(),
  })

export const updateGenreSchema =
  createGenreSchema.partial()