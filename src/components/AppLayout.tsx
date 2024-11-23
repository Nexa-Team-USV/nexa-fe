import { Outlet } from "react-router";
import Header from "./header/Header";

export default function AppLayout() {
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
