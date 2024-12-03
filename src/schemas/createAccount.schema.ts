import { z } from "zod";

import { emailSchema } from "./email.schema";

export const createAccountSchema = z
  .object({
    email: emailSchema,
    role: z.string().refine(
      (val) => {
        if (val === "student" || val === "teacher" || val === "admin") {
          return true;
        }
        return false;
      },
      {
        message: "The role field is required!",
      },
    ),
    studyType: z.string(),
    group: z.string(),
  })
  .refine(
    (val) => {
      const { role, studyType } = val;

      if (role === "teacher" || role === "admin") {
        return true;
      }

      if (
        role === "student" &&
        (studyType === "licenta" || studyType === "master")
      ) {
        return true;
      }

      return false;
    },
    {
      message: "The study type field is required!",
      path: ["studyType"],
    },
  )
  .refine(
    (val) => {
      const { role, group } = val;
      if (role === "teacher" || role === "admin") {
        return true;
      }

      if (role === "student" && group !== "") {
        return true;
      }

      return false;
    },
    {
      message: "The group field is required!",
      path: ["group"],
    },
  );
