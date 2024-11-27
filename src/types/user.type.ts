import { z } from "zod";

import { loginSchema } from "../schemas/login.schema";

export type Login = z.infer<typeof loginSchema>;

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
