import { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";

import { AuthContext } from "./contexts/AuthContext";
import { useLogout } from "./features/authentication/hooks/useLogout";

export default function App() {
  const { isLogged, token } = useContext(AuthContext);
  const { logout } = useLogout();

  // Check if the token is expired
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
        logout();
      }
    }
  }, [token, logout]);

  return isLogged ? <AppLayout /> : <AuthLayout />;
}
