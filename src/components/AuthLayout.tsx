import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import Header from "./header/Header";
import Loader from "./Loader";

export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const checkAuthPaths =
    location.pathname === "/forgotPassword" ||
    location.pathname === "/resetPassword" ||
    location.pathname === "/" ||
    location.pathname === "/tests" ||
    location.pathname === "/login";

  useEffect(() => {
    if (!checkAuthPaths) {
      navigate("/");
    }
  }, [location.pathname, navigate, checkAuthPaths]);

  if (!checkAuthPaths) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

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
