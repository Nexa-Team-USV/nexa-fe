import { z } from "zod";

import { passwordSchema } from "./password.schema";

export const changePasswordSchema = z.object({
  oldPassword: passwordSchema,
  newPassword: passwordSchema,
  confirmNewPassword: passwordSchema,
});
