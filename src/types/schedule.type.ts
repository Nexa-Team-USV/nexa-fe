import { z } from "zod";
import { scheduleExamTestSchema } from "../schemas/scheduleExamTest.schema";

export type SchedulingResponse = {
  _id: string;
  type: string;
  title: string;
  studyType: string;
  group: string;
  date: string;
  startTime: string;
  endTime: string;
  assistants: string;
  description: string;
  created_at: string;
  teacher_id: string;
};

export type Scheduling = {
  id: string;
  type: string;
  title: string;
  studyType: string;
  group: string;
  date: string;
  startTime: string;
  endTime: string;
  assistants: string;
  description: string;
  createdAt: string;
  teacherId: string;
};

export type Months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type MonthsWithSchedulings = {
  month: Months;
  monthSchedulings: Scheduling[];
};

export type ScheduleExamTest = z.infer<typeof scheduleExamTestSchema>;

export type EditExamTest = z.infer<typeof scheduleExamTestSchema>;

export type Schedule = Omit<ScheduleExamTest, "assistant" | "classroom"> & {
  classrooms: string[];
  assistants: string[];
  teacher_id: string;
};

export type EditScheduling = Omit<
  EditExamTest,
  "assistant" | "classroom" | "teacher_id"
> & {
  classrooms: string[];
  assistants: string[];
};
