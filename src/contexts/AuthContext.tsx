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
  error: string;
  setToken: Dispatch<SetStateAction<string | null>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContext>({
  token: "",
  isLogged: false,
  isLoading: false,
  error: "",
  setToken: () => undefined,
  setIsLogged: () => undefined,
  setIsLoading: () => undefined,
  setError: () => undefined,
});

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(() => getToken());
  const [isLogged, setIsLogged] = useState<boolean>(() => !!getToken());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        token,
        isLogged,
        isLoading,
        error,
        setToken,
        setIsLogged,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
