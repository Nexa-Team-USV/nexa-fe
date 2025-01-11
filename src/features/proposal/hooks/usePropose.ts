import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ProposalsApi } from "../../../api/ProposeApi";
import { mapProposal } from "../../../utils/mapProposals";
import { Proposal } from "../../../types/proposal.type";
import { ProposalsContext } from "../../../contexts/ProposalContext";

export function usePropose() {
  const { proposals, setProposals } = useContext(ProposalsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function propose(data: Proposal) {
    setIsLoading(true);

    ProposalsApi.Propose(data)
      .then((res) => {
        if (!res || !res._id) {
          throw new Error("Proposal creation failed: invalid response");
        }
        const mappedProposal = mapProposal(res);
        const proposalsCopy = JSON.parse(JSON.stringify(mappedProposal));
        setProposals(proposalsCopy);

        toast.success("Proposal created successfully!");
      })
      .catch((error) => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  const deleteProposal = async (proposeId: string) => {
    setIsLoading(true);
    try {
      await ProposalsApi.deletepropose(proposeId);

      const proposalsCopy = proposals.filter(
        (proposal) => String(proposal.id) !== String(proposeId),
      );
      setProposals(proposalsCopy);
      toast.success("Proposal deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete proposal");
    } finally {
      setIsLoading(false);
    }
  };

  return { proposals, propose, deleteProposal, isLoading };
}
