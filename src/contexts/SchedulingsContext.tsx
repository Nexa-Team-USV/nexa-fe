import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { MonthsWithSchedulings } from "../types/schedule.type";

export const monthsWithSchedulings: MonthsWithSchedulings[] = [
  {
    month: "January",
    monthSchedulings: [],
  },
  {
    month: "February",
    monthSchedulings: [],
  },
  {
    month: "March",
    monthSchedulings: [],
  },
  {
    month: "April",
    monthSchedulings: [],
  },
  {
    month: "May",
    monthSchedulings: [],
  },
  {
    month: "June",
    monthSchedulings: [],
  },
  {
    month: "July",
    monthSchedulings: [],
  },
  {
    month: "August",
    monthSchedulings: [],
  },
  {
    month: "September",
    monthSchedulings: [],
  },
  {
    month: "October",
    monthSchedulings: [],
  },
  {
    month: "November",
    monthSchedulings: [],
  },
  {
    month: "December",
    monthSchedulings: [],
  },
];

type SchedulingsContext = {
  schedulings: MonthsWithSchedulings[];
  isLoading: boolean;
  setSchedulings: Dispatch<SetStateAction<MonthsWithSchedulings[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const SchedulingsContext = createContext<SchedulingsContext>({
  schedulings: monthsWithSchedulings,
  isLoading: false,
  setSchedulings: () => undefined,
  setIsLoading: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function SchedulingsProvider({ children }: Props) {
  const [schedulings, setSchedulings] = useState<MonthsWithSchedulings[]>(
    monthsWithSchedulings,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <SchedulingsContext.Provider
      value={{
        schedulings,
        isLoading,
        setSchedulings,
        setIsLoading,
      }}
    >
      {children}
    </SchedulingsContext.Provider>
  );
}
