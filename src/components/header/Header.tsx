import { useContext } from "react";

import { Link } from "react-router-dom";
import Logo from "../Logo";
import ScheduleButton from "../../features/scheduling/components/ScheduleButton";
import NotificationsButton from "../../features/notifications/components/NotificationsButton";
import ProfileBadge from "./ProfileBadge";
import SidebarButton from "./SidebarButton";

import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const { isLogged } = useContext(AuthContext);
  const {
    user: { role },
  } = useContext(UserContext);

  return (
    <header className="flex h-20 items-center justify-between gap-6 bg-primary px-4 py-3 sm:gap-8 sm:px-8">
      <Link to="/" className="mr-auto">
        <Logo variant="white" />
      </Link>
      {isLogged ? (
        <>
          {role === "teacher" && <ScheduleButton />}
          <NotificationsButton />
          <ProfileBadge />
          <SidebarButton />
        </>
      ) : (
        <Link
          to="/login"
          className="rounded-lg bg-white px-4 py-1.5 font-medium text-primary transition-colors hover:bg-secondary"
        >
          Login
        </Link>
      )}
    </header>
  );
}
