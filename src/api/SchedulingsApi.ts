import { AxiosResponse } from "axios";
import { api } from "../config/api";
import { Schedule, SchedulingResponse } from "../types/schedule.type";
// import { SchedulingResponse } from "../types/schedule.type";

const URL = "/api/scheduling";

export const SchedulingsApi = {
  // getSchedulings() {
  //   return api
  //     .get("/retrrischedulings")
  //     .then(({ data }: AxiosResponse<SchedulingResponse[]>) => data);
  // },
  schedule(data: Schedule) {
    return api
      .post(`${URL}/schedule`, data)
      .then(
        ({ data }: AxiosResponse<{ scheduling: SchedulingResponse }>) =>
          data.scheduling,
      );
  },
};
