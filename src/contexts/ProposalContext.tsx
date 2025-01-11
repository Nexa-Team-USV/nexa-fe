import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { Proposal } from "../types/proposal.type";

export const initialProposals: Proposal[] = [];

type ProposalsContextType = {
  proposals: Proposal[];
  isLoading: boolean;
  setProposals: Dispatch<SetStateAction<Proposal[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const ProposalsContext = createContext<ProposalsContextType>({
  proposals: initialProposals,
  isLoading: false,
  setProposals: () => undefined,
  setIsLoading: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function ProposalsProvider({ children }: Props) {
  const [proposals, setProposals] = useState<Proposal[]>(initialProposals);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ProposalsContext.Provider
      value={{
        proposals,
        isLoading,
        setProposals,
        setIsLoading,
      }}
    >
      {children}
    </ProposalsContext.Provider>
  );
}
