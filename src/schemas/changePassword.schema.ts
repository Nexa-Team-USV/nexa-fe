import { z } from "zod";

import { passwordSchema } from "./password.schema";

export const changePasswordSchema = z
  .object({
    oldPassword: passwordSchema,
    newPassword: passwordSchema,
    confirmNewPassword: passwordSchema,
  })
  .refine(
    (val) => {
      const { newPassword, confirmNewPassword } = val;
      if (newPassword !== confirmNewPassword) return false;

      return true;
    },
    { message: "Passwords don't match!", path: ["confirmNewPassword"] },
  );
