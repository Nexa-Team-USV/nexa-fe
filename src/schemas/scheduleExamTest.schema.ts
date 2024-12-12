import { z } from "zod";

export const scheduleExamTestSchema = z
  .object({
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
    assistant: z.string(),
    classroom: z.string(),
    date: z.string().date("The date is invalid!"),
    startTime: z.string().time("The start time is invalid!"),
    endTime: z.string().time("The end time is invalid!"),
    classrooms: z.array(z.string()),
    assistants: z.array(z.string()),
    description: z.string(),
  })
  .refine(
    (data) => {
      const classrooms = data.classrooms;
      if (classrooms.length === 0) {
        return false;
      }

      return true;
    },
    { message: "At least one classroom is required!", path: ["classroom"] },
  )
  .refine(
    (data) => {
      const assistants = data.assistants;
      if (assistants.length === 0) {
        return false;
      }

      return true;
    },
    { message: "At least one assistant is required!", path: ["assistant"] },
  );
