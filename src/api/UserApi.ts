import { AxiosResponse } from "axios";
import { api } from "../config/api";
import {
  ChangePassword,
  CreateAccount,
  UserResponse,
} from "../types/user.type";

const URL = "/api/users";

export const UserApi = {
  getCurrentUser() {
    return api
      .get(`${URL}/current-user`)
      .then(({ data }: AxiosResponse<UserResponse>) => data);
  },
  getUsers(role: string, limit: number, offset: number) {
    return api
      .get(`${URL}/${role}?limit=${limit}&offset=${offset}`)
      .then(
        ({ data }: AxiosResponse<{ users: UserResponse[]; pages: number }>) =>
          data,
      );
  },
  createAccount(data: CreateAccount) {
    return api
      .post(`${URL}/create-account`, data)
      .then(({ data }: AxiosResponse<{ user: UserResponse }>) => data.user);
  },
  deleteAccount(id: string) {
    return api
      .delete(`${URL}/remove-account/${id}`)
      .then(({ data }: AxiosResponse<{ user: UserResponse }>) => data.user);
  },
  changePassword(data: ChangePassword) {
    return api
      .put(`${URL}/reset-password`, data)
      .then(({ data }: AxiosResponse<{ message: string }>) => data.message);
  },
};
