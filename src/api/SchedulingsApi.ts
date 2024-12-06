import { AxiosResponse } from "axios";

import { api } from "../config/api";
import { SchedulingResponse } from "../types/schedule.type";

export const SchedulingsApi = {
  getSchedulings() {
    return api
      .get("/schedulings")
      .then(({ data }: AxiosResponse<SchedulingResponse[]>) => data);
  },
};
