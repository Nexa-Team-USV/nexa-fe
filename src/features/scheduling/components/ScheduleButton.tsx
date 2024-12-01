import { useState } from "react";

import Button from "../../../components/Button";
import Overlay from "../../../components/Overlay";
import { HiMiniPlus, HiMiniXMark } from "react-icons/hi2";
import ScheduleForm from "./ScheduleForm";

export default function ScheduleButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="secondary"
        className="hidden px-4 sm:inline-block"
      >
        Schedule
      </Button>
      <Button
        onClick={() => setIsOpen(true)}
        variant="empty"
        className="rounded-full bg-white p-1 sm:hidden"
      >
        <HiMiniPlus className="stroke-1 text-2xl text-primary" />
      </Button>

      {isOpen && (
        <Overlay>
          <Button
            onClick={() => setIsOpen(false)}
            variant="empty"
            className="absolute right-5 top-5"
          >
            <HiMiniXMark className="stroke-1 text-2xl text-primary" />
          </Button>
          <ScheduleForm />
        </Overlay>
      )}
    </>
  );
}
