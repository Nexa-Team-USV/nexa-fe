import { z } from "zod";
import { examProposalSchema } from "../schemas/proposalExamTest.schema";

export type ProposalResponse = {
  _id: string;
  title: string;
  type: string;
  studyType: string;
  group: string;
  description?: string;
  created_by: number;
  created_at: string;
};

export type Proposal = {
  id: string;
  title: string;
  type: string;
  studyType: string;
  group: string;
  date: string;
  description?: string;
  proposerId: number;
  createdDate: string;
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
export type MonthsWithProposals = {
  month: Months;
  monthProposals: Proposal[];
};

export type ProposalExamTest = z.infer<typeof examProposalSchema>;
