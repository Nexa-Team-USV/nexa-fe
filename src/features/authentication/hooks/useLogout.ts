import { useContext } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "../../../contexts/AuthContext";

export function useLogout() {
  const { setToken, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setToken(null);
    setIsLogged(false);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return { logout };
}
