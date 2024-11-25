import { useContext, useEffect } from "react";

import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";
import Loader from "./components/Loader";

import { AuthContext } from "./contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";

export default function App() {
  const { isLogged } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const checkAuthPaths =
    location.pathname === "/forgotPassword" ||
    location.pathname === "/resetPassword" ||
    location.pathname === "/" ||
    location.pathname === "/tests" ||
    location.pathname === "/login";

  const checkAppPaths =
    location.pathname === "/forgotPassword" ||
    location.pathname === "/resetPassword" ||
    location.pathname === "/login";

  useEffect(() => {
    if ((!isLogged && !checkAuthPaths) || (isLogged && checkAppPaths)) {
      navigate("/");
    }
  }, [location.pathname, navigate, isLogged, checkAuthPaths, checkAppPaths]);

  if ((!isLogged && !checkAuthPaths) || (isLogged && checkAppPaths)) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return isLogged ? <AppLayout /> : <AuthLayout />;
}
