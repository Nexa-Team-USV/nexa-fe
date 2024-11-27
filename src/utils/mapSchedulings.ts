import { SchedulingResponse } from "../types/schedule.type";

export function mapSchedulings(schedulings: SchedulingResponse[]) {
  return schedulings.map(({ teacher_id, ...schedulings }) => ({
    ...schedulings,
    teacherId: teacher_id,
  }));
}
