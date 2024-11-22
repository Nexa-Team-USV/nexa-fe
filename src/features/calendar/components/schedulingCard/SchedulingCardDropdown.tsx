import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Button from "../../../../components/Button";

import { useClickOutside } from "../../../../hooks/useClickOutside";

export default function SchedulingCardDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <div ref={containerRef} className="relative">
      <Button
        variant="empty"
        onClick={() => setIsOpen((prev) => !prev)}
        className={twMerge(
          "z-0 rounded-lg bg-secondary p-1",
          isOpen && "bg-primary",
        )}
      >
        <HiMiniEllipsisVertical
          className={twMerge(
            "stroke-1 text-xl text-primary",
            isOpen && "text-white",
          )}
        />
      </Button>

      {isOpen && (
        <ul className="absolute right-full top-0 z-10 mr-0.5 w-36 -translate-y-full rounded-lg border-2 border-primary bg-white p-2 shadow-xl xsm:top-full xsm:translate-y-0">
          <li>
            <Button
              variant="empty"
              className="w-full rounded-lg p-2 text-left transition-colors hover:bg-secondary"
            >
              Edit
            </Button>
          </li>
          <li>
            <Button
              variant="empty"
              className="w-full rounded-lg p-2 text-left transition-colors hover:bg-secondary"
            >
              Info
            </Button>
          </li>
          <li>
            <Button
              variant="empty"
              className="w-full rounded-lg p-2 text-left transition-colors hover:bg-secondary"
            >
              Delete
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}
