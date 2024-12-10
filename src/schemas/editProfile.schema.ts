import { z } from "zod";

export const editProfileSchema = z.object({
  newUsername: z
    .string()
    .max(20, "The username shouldn't be longer than 20 characters!"),
  newStudyType: z
    .string()
    .refine((val) => val === "licenta" || val === "master" || val === "", {
      message: "The study type field is required!",
    }),
  newGroup: z.string(),
});
