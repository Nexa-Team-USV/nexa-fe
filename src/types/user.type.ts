import { z } from "zod";

import { loginSchema } from "../schemas/login.schema";
import { createAccountSchema } from "../schemas/createAccount.schema";
import { changePasswordSchema } from "../schemas/changePassword.schema";
import { editProfileSchema } from "../schemas/editProfile.schema";

export type Role = "student" | "teacher" | "admin";

export type UserResponse = {
  _id: string;
  username: string;
  email: string;
  studyType: string;
  group: string;
  role: Role;
  createdAt: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
  studyType: string;
  group: string;
  role: Role | "";
  createdAt: string;
};

export type Users = {
  student: User[];
  teacher: User[];
  admin: User[];
};

export type Login = z.infer<typeof loginSchema>;

export type CreateAccount = z.infer<typeof createAccountSchema>;

export type ChangePassword = z.infer<typeof changePasswordSchema>;

export type EditProfile = z.infer<typeof editProfileSchema>;
