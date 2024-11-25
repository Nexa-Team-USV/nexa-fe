import { z } from "zod";

export const passwordSchema = z.string().min(2, {
  message: "Password must be at least 2 characters.",
});
