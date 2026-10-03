import { z } from "zod";

export const getMovieShowtimesSchema = z.object({
  params: z.object({
    movieId: z.string().min(1),
  }),

  query: z.object({
    city: z.string().optional(),

    date: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "Date must be YYYY-MM-DD"
      )
      .optional(),
  }),
});