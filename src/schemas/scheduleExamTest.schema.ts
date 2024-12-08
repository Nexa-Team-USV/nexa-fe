import { z } from "zod";

export const scheduleExamTestSchema = z.object({
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
    .max(20, "The title shouldn't be longer than 30 characters!"),
  group: z.string().min(1, "The group field is required!"),
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
  assistant: z.string().min(1, "The assistant field is required!"),
  classroom: z.string().min(1, "The classroom field is required!"),
  date: z.string().date("The date is invalid!"),
  startTime: z.string().time("The start time is invalid!"),
  endTime: z.string().time("The end time is invalid!"),
  description: z.string(),
});
