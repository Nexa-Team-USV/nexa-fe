import { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import Header from "./Header";

import { AuthContext } from "../contexts/AuthContext";

export default function AuthLayout() {
  const { isLogged } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !isLogged &&
      !(
        location.pathname === "/forgotPassword" ||
        location.pathname === "/resetPassword" ||
        location.pathname === "/" ||
        location.pathname === "/tests"
      )
    ) {
      navigate("/login");
    }
  }, [location.pathname, navigate, isLogged]);

  if (location.pathname === "/" || location.pathname === "/tests") {
    return (
      <div>
        <Header />

        <main className="p-4 sm:px-8 sm:py-16">
          <div className="m-auto max-w-screen-lg">
            <Outlet />
          </div>
        </main>
      </div>
    );
  }

  return (
    <main className="m-auto h-screen max-w-screen-xl">
      <Outlet />
    </main>
  );
}
