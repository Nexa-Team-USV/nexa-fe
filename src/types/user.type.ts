import { z } from "zod";

import { loginSchema } from "../schemas/login.schema";
import { createAccountSchema } from "../schemas/createAccount.schema";
import { changePasswordSchema } from "../schemas/changePassword.schema";
import { deleteAccountSchema } from "../schemas/deleteAccount.schema";

type Role = "student" | "teacher" | "admin" | "";

export type UserResponse = {
  _id: string;
  username: string;
  email: string;
  specialization: string;
  group: string;
  role: Role;
  createdAt: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
  specialization: string;
  group: string;
  role: Role;
  createdAt: string;
};

export type Login = z.infer<typeof loginSchema>;

export type CreateAccount = z.infer<typeof createAccountSchema>;

export type DeleteAccount = z.infer<typeof deleteAccountSchema>;

export type ChangePassword = z.infer<typeof changePasswordSchema>;
