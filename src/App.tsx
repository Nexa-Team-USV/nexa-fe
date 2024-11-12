import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
