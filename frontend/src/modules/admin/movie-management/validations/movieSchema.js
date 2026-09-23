import { z } from 'zod'

export const movieSchema = z.object({
  title: z.string().min(1),

  description: z.string(),

  duration: z.number(),

  releaseDate: z.coerce.date(),

  status: z.string(),

  certification: z.string(),

  genres: z.array(z.any()),

  cast: z.array(z.any()),

  languages:
    z.array(z.string()),

  subtitleLanguages:
    z.array(z.string()),

  poster: z.object({
    file: z.any().nullable().optional(),
    url: z.string().optional(),
  }).nullable().optional(),

  banner: z.object({
    file: z.any().nullable().optional(),
    url: z.string().optional(),
  }).nullable().optional(),

  formats: z.array(z.string()).optional(),
})