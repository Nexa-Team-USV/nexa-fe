import { z } from "zod";

import { emailSchema } from "./email.schema";

export const deleteAccountSchema = z.object({
  email: emailSchema,
});
