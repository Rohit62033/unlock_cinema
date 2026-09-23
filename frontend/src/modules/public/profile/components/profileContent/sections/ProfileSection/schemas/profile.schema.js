import { z } from "zod";

export const profileSchema = z.object({

    firstName: z
        .string()
        .trim()
        .min(2, "First name is required"),

    lastName: z
        .string()
        .trim()
        .min(2, "Last name is required"),

    dob: z.date().nullable(),
    
    gender: z.enum([
        "male",
        "female",
        "other",
    ]).optional(),

    married: z.boolean().optional(),

});