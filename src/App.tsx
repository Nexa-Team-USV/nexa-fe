import { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";

import { AuthContext } from "./contexts/AuthContext";
import { useNavigate } from "react-router";

export default function App() {
  const { isLogged, token, setToken, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  // Check if the token is expired
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/");
        setToken(null);
        setIsLogged(false);
      }
    }
  }, [token, setIsLogged, setToken, navigate]);

  return isLogged ? <AppLayout /> : <AuthLayout />;
}
