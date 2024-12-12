import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { getToken } from "../utils/getToken";

type AuthContext = {
  token: string | null;
  isLogged: boolean;
  isLoading: boolean;
  setToken: Dispatch<SetStateAction<string | null>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContext>({
  token: "",
  isLogged: false,
  isLoading: false,
  setToken: () => undefined,
  setIsLogged: () => undefined,
  setIsLoading: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(() => getToken());
  const [isLogged, setIsLogged] = useState<boolean>(() => !!getToken());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        token,
        isLogged,
        isLoading,
        setToken,
        setIsLogged,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
