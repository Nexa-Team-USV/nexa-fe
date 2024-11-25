import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { AuthApi } from "../../../api/AuthApi";

export function useLogin() {
  const { isLoading, error, setToken, setIsLogged, setIsLoading, setError } =
    useContext(AuthContext);

  function login(userCredentials: { email: string; password: string }) {
    setIsLoading(true);
    AuthApi.login(userCredentials)
      .then((res) => {
        const token = res.token;
        localStorage.setItem("token", token);
        setToken(token);
        setIsLogged(true);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { login, isLoading, error };
}