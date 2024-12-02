import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { User } from "../types/user.type";

type UserContext = {
  user: User;
  isLoading: boolean;
  error: string;
  setUser: Dispatch<SetStateAction<User>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

const defaultUser = {
  id: "",
  username: "",
  email: "",
  studyType: "",
  group: "",
  role: "",
  createdAt: "",
} as const;

export const UserContext = createContext<UserContext>({
  user: defaultUser,
  isLoading: true,
  error: "",
  setUser: () => undefined,
  setIsLoading: () => undefined,
  setError: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>(defaultUser);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  return (
    <UserContext.Provider
      value={{ user, isLoading, error, setUser, setIsLoading, setError }}
    >
      {children}
    </UserContext.Provider>
  );
}
