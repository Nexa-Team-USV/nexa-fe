import { SchedulingResponse } from "../types/schedule.type";

export function mapScheduling(scheduling: SchedulingResponse) {
  const { _id, created_at, teacher_id, ...rest } = scheduling;

  return {
    id: _id,
    createdAt: created_at,
    teacherId: teacher_id,
    ...rest,
  };
}
