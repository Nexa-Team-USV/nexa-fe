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
    specialization: z.string(),
    group: z.string(),
  })
  .refine(
    (val) => {
      const { role, specialization } = val;

      if (role === "teacher" || role === "admin") {
        return true;
      }

      if (
        role === "student" &&
        (specialization === "licenta" || specialization === "master")
      ) {
        return true;
      }

      return false;
    },
    {
      message: "The specialization field is required!",
      path: ["specialization"],
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
