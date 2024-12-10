import { z } from "zod";

export const examProposalSchema = z.object({
  type: z.string().refine(
    (val) => {
      if (val === "exam" || val === "test") {
        return true;
      }
      return false;
    },
    {
      message: "The type field is required!",
    },
  ),
  title: z
    .string()
    .min(1, "The title field is required!")
    .max(40, "The title shouldn't be longer than 40 characters!"),
  studyType: z.string().refine(
    (val) => {
      if (val === "licenta" || val === "master") {
        return true;
      }
      return false;
    },
    {
      message: "The study type field is required!",
    },
  ),
  date: z.string().date("The date is invalid!"),

  group: z.string().min(1, "The group field is required!"),
  description: z.string(),
});
