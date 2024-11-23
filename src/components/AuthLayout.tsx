import { Outlet, useLocation } from "react-router";
import Header from "./header/Header";

export default function AuthLayout() {
  const location = useLocation();

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
