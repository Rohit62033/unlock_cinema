import { z } from "zod";

export const updateProfileSchema = z.object({

  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(40)
    .optional(),

  lastName: z
    .string()
    .trim()
    .min(2)
    .max(40)
    .optional(),

  dob: z
    .coerce
    .date()
    .nullable()
    .optional(),

  gender: z
    .enum([
      "male",
      "female",
      "other",
    ])
    .optional(),

  married: z
    .boolean()
    .optional(),

  preferences: z.object({

    languages: z
      .array(z.string())
      .optional(),

    favouriteGenres: z
      .array(z.string())
      .optional(),

  }).optional(),

}).strict();

export const updateAvatarSchema = z.object({
  url: z.string(),
  public_id: z.string()

})