import { z } from "zod";

import { emailSchema } from "./email.schema";

export const createAccountSchema = z.object({
  email: emailSchema,
  role: z.enum(["student", "teacher", "admin", ""]),
  // .refine((val) => val !== "", {
  //   message: "The role field is required!",
  // }),
  specialization: z.enum(["licenta", "master", ""]),
  // .refine((val) => val !== "", {
  //   message: "The specialization field is required!",
  // }),
  group: z.string().min(1, "The group field is required!"),
});
