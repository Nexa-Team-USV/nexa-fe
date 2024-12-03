import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import Header from "./header/Header";
import Loader from "./Loader";
import { useFetchUser } from "../hooks/useFetchUser";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading } = useFetchUser();

  const checkAppPaths =
    location.pathname === "/forgotPassword" ||
    location.pathname === "/resetPassword" ||
    location.pathname === "/login";

  useEffect(() => {
    if (checkAppPaths) {
      navigate("/");
    }
  }, [location.pathname, navigate, checkAppPaths]);

  if (isLoading || checkAppPaths) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

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
