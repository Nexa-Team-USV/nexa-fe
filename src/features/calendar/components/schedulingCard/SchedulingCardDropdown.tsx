import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Button from "../../../../components/Button";
import SchedulingCardDropdownEditButton from "./SchedulingCardDropdownEditButton";

import { useDeleteScheduling } from "../../hooks/useDeleteScheduling";
import { Scheduling } from "../../../../types/schedule.type";

type Props = {
  scheduling: Scheduling & {
    classrooms: string[];
  };
};

export default function SchedulingCardDropdown({ scheduling }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditSchedulingFormOpen, setIsEditSchedulingFormOpen] =
    useState<boolean>(false);
  const { isLoading, deleteScheduling } = useDeleteScheduling();
  // const containerRef = useRef<HTMLDivElement>(null);

  // const handleDropdownClose = useCallback(() => {
  //   console.log(isEditSchedulingFormOpen);
  //   if (isEditSchedulingFormOpen) return;
  //   setIsOpen(false);
  // }, [isEditSchedulingFormOpen]);

  // useClickOutside(containerRef, handleDropdownClose);

  // console.log(isEditSchedulingFormOpen);

  return (
    <div
      // ref={containerRef}
      className="relative"
    >
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
            <SchedulingCardDropdownEditButton
              scheduling={scheduling}
              isOpen={isEditSchedulingFormOpen}
              setIsOpen={setIsEditSchedulingFormOpen}
            />
          </li>
          <li>
            <Button
              variant="empty"
              disabled={isLoading}
              onClick={() => deleteScheduling(scheduling.id)}
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
