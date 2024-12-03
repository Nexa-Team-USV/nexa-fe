import { useContext } from "react";

import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";

import { AuthContext } from "./contexts/AuthContext";

export default function App() {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? <AppLayout /> : <AuthLayout />;
}
