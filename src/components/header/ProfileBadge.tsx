import { useContext, useRef, useState } from "react";

import { HiMiniChevronDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Button from "../Button";

import { useLogout } from "../../features/authentication/hooks/useLogout";
import { useClickOutside } from "../../hooks/useClickOutside";
import { UserContext } from "../../contexts/UserContext";

export default function ProfileBadge() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));
  const { logout } = useLogout();
  const { user } = useContext(UserContext);

  return (
    <div ref={containerRef} className="relative hidden md:block">
      <Button
        variant="empty"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg bg-white p-2"
      >
        <div className="h-9 w-9 rounded-full bg-primary"></div>
        <div className="font-medium">{user?.username || user?.email}</div>
        <HiMiniChevronDown className="stroke-1 text-xl" />
      </Button>

      {isOpen && (
        <ul className="absolute left-0 top-full w-full rounded-lg border-2 border-primary bg-white p-2 shadow-xl">
          <li className="w-full rounded-lg transition-colors hover:bg-secondary">
            <Link to="/profile" className="inline-block w-full p-2">
              Profile
            </Link>
          </li>
          <li className="w-full rounded-lg transition-colors hover:bg-secondary">
            <Button
              variant="empty"
              onClick={logout}
              className="w-full p-2 text-left"
            >
              Log out
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}
