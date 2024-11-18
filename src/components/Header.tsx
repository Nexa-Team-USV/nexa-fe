import { Link } from "react-router-dom";
import NotificationsButton from "../features/notifications/NotificationsButton";
import ScheduleButton from "../features/scheduling/ScheduleButton";
import Logo from "./Logo";
import ProfileBadge from "./ProfileBadge";
import SidebarButton from "./SidebarButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 bg-primary px-4 py-3 sm:gap-8">
      <Link to="/" className="mr-auto">
        <Logo variant="white" />
      </Link>
      <ScheduleButton />
      <NotificationsButton />
      <ProfileBadge />
      <SidebarButton />
    </header>
  );
}
