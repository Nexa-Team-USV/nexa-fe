import { useRef, useState } from "react";

import { HiMiniBell } from "react-icons/hi2";
import Notifications from "./Notifications";
import Button from "../../../components/Button";

import { useClickOutside } from "../../../hooks/useClickOutside";

export default function NotificationsButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <div ref={containerRef} className="relative">
      <Button onClick={() => setIsOpen((prev) => !prev)} variant="empty">
        <HiMiniBell className="text-2xl text-white" />
        <div className="absolute -top-1/3 left-1/2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-sm font-bold text-white">
          10
        </div>
      </Button>
      {isOpen && (
        <div className="absolute right-0 top-full z-10">
          <Notifications />
        </div>
      )}
    </div>
  );
}
