import { AxiosResponse } from "axios";
import { api } from "../config/api";
import { Login } from "../types/user.type";

const URL = "/api/auth";

export const AuthApi = {
  login(userCredentials: Login) {
    return api
      .post(`${URL}/login`, userCredentials)
      .then(({ data }: AxiosResponse<string>) => data);
  },
};
