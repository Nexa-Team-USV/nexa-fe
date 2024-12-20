import { AxiosResponse } from "axios";
import { api } from "../config/api";
import { Schedule, SchedulingResponse } from "../types/schedule.type";

const URL = "/api/schedulings";

export const SchedulingsApi = {
  getSchedulings(type: string, search: string) {
    return api
      .get(`${URL}/retrieve-schedulings${type ? `${type}` : ""}${search}`)
      .then(
        ({ data }: AxiosResponse<{ schedulings: SchedulingResponse[] }>) =>
          data.schedulings,
      );
  },
  getClassrooms(schedulingId: string) {
    return api
      .get(`${URL}/retrieve-classrooms/${schedulingId}`)
      .then(
        ({ data }: AxiosResponse<{ classrooms: string }>) => data.classrooms,
      );
  },
  schedule(data: Schedule) {
    return api
      .post(`${URL}/schedule`, data)
      .then(
        ({ data }: AxiosResponse<{ scheduling: SchedulingResponse }>) =>
          data.scheduling,
      );
  },
  deleteScheduling(schedulingId: string) {
    return api
      .delete(`${URL}/remove-scheduling/${schedulingId}`)
      .then(({ data }: AxiosResponse<{ message: string }>) => data.message);
  },
};
