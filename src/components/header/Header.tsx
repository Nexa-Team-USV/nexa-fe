import { useContext } from "react";

import { Link } from "react-router-dom";
import Logo from "../Logo";
import ScheduleButton from "../../features/scheduling/components/ScheduleButton";
import NotificationsButton from "../../features/notifications/components/NotificationsButton";
import ProfileBadge from "./ProfileBadge";
import SidebarButton from "./SidebarButton";

import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const { isLogged } = useContext(AuthContext);

  return (
    <header className="flex items-center justify-between gap-6 bg-primary px-8 py-3 sm:gap-8">
      <Link to="/" className="mr-auto">
        <Logo variant="white" />
      </Link>
      {isLogged ? (
        <>
          <ScheduleButton />
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