import { AxiosResponse } from "axios";
import { api } from "../config/api";
import { Proposal, ProposalResponse } from "../types/proposal.type";

const URL = "/api/proposals";

export const ProposalsApi = {
  getProposals(type: string, search: string) {
    return api
      .get(`${URL}/get-proposals${type ? `${type}` : ""}${search}`)
      .then(
        ({ data }: AxiosResponse<{ proposals: ProposalResponse[] }>) =>
          data.proposals,
      );
  },

  Propose(data: Proposal) {
    return api
      .post(`${URL}/create-proposal`, data)
      .then(
        ({ data }: AxiosResponse<{ propose: ProposalResponse }>) =>
          data.propose,
      );
  },
  deletepropose(proposeId: string) {
    return api
      .delete(`${URL}/:proposalId/${proposeId}`)
      .then(({ data }: AxiosResponse<{ message: string }>) => data.message);
  },
};
