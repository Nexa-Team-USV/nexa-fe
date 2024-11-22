import { AxiosResponse } from "axios";

import { api } from "../config/api";
import { SchedulingResponse } from "../types/schedule.type";

export const SchedulingsApi = {
  getSchedules() {
    return api
      .get("/schedules")
      .then(({ data }: AxiosResponse<SchedulingResponse[]>) => data);
  },
};
