import { z } from "zod";
import { examProposalSchema } from "../schemas/proposalExamTest.schema";

export type ExamProposalResponse = {
  id: number;
  title: string;
  type: string;
  studyType: string;
  group: string;
  description?: string;
  createdBy: number; 
  createdAt: string; 
};

export type ExamProposal = {
  id: number;
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
  monthProposals: ExamProposal[];
};

 
export type ProposalExamTest= z.infer<typeof examProposalSchema>;
