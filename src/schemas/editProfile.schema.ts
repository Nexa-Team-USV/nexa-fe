import { z } from "zod";

export const editProfileSchema = z
  .object({
    newUsername: z
      .string()
      .max(20, "The username shouldn't be longer than 20 characters!"),
    newStudyType: z.string(),
    newGroup: z.string(),
  })
  .refine(
    (val) => {
      const { newStudyType } = val;
      if (
        newStudyType === "licenta" ||
        newStudyType === "master" ||
        newStudyType === ""
      ) {
        return true;
      }

      return false;
    },
    { message: "The study type field is required!", path: ["newStudyType"] },
  );
