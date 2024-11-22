import { ScheduleResponse } from "../types/schedule.type";

export function mapSchedules(schedules: ScheduleResponse[]) {
  return schedules.map(({ teacher_id, ...schedule }) => ({
    ...schedule,
    teacherId: teacher_id,
  }));
}
