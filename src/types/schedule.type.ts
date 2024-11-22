export type SchedulingResponse = {
  id: number;
  title: string;
  type: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  teacher_id: number;
};

export type Scheduling = {
  id: number;
  title: string;
  type: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  teacherId: number;
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
