import { z } from "zod";

export const emailSchema = z.string().min(2, {
  message: "Email must be at least 2 characters.",
});
