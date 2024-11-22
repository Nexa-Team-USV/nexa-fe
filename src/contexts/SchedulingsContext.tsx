import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { MonthsWithSchedulings } from "../types/schedule.type";

type SchedulingsContext = {
  schedulings: MonthsWithSchedulings[];
  isLoading: boolean;
  error: string;
  setSchedulings: Dispatch<SetStateAction<MonthsWithSchedulings[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const SchedulingsContext = createContext<SchedulingsContext>({
  schedulings: [],
  isLoading: true,
  error: "",
  setSchedulings: () => undefined,
  setIsLoading: () => undefined,
  setError: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function SchedulingsProvider({ children }: Props) {
  const [schedulings, setSchedulings] = useState<MonthsWithSchedulings[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  return (
    <SchedulingsContext.Provider
      value={{
        schedulings,
        isLoading,
        error,
        setSchedulings,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </SchedulingsContext.Provider>
  );
}
