import { Proposal, ProposalResponse } from "../types/proposal.type";

export const mapProposal = (response: ProposalResponse): Proposal => {
  return {
    id: response._id,
    title: response.title,
    type: response.type,
    studyType: response.studyType,
    group: response.group,
    date: response.created_at,
    description: response.description,
    proposerId: response.created_by,
    createdDate: response.created_at,
  };
};
