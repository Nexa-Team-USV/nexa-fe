import { z } from "zod";

export const editUsernameSchema = z.object({
  newUsername: z
    .string()
    .max(20, "The username shouldn't be longer than 20 characters!"),
});
