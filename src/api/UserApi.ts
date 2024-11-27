import { AxiosResponse } from "axios";
import { api } from "../config/api";
import { UserResponse } from "../types/user.type";

const URL = "/api/users";

export const UserApi = {
  getCurrentUser() {
    return api
      .get(`${URL}/current-user`)
      .then(({ data }: AxiosResponse<UserResponse>) => data);
  },
};
