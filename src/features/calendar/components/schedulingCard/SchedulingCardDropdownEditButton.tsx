import Button from "../../../../components/Button";
import Overlay from "../../../../components/Overlay";
import EditSchedulingForm from "./EditSchedulingForm";
import { HiMiniXMark } from "react-icons/hi2";
import { Scheduling } from "../../../../types/schedule.type";

type Props = {
  scheduling: Scheduling & {
    classrooms: string[];
  };
  isOpen: boolean;
  onEditSchedulingFormOpen: () => void;
  onEditSchedulingFormClose: () => void;
};

export default function SchedulingCardDropdownEditButton({
  scheduling,
  isOpen,
  onEditSchedulingFormOpen,
  onEditSchedulingFormClose,
}: Props) {
  return (
    <>
      <Button
        variant="empty"
        onClick={onEditSchedulingFormOpen}
        className="w-full rounded-lg p-2 text-left transition-colors hover:bg-secondary"
      >
        Edit
      </Button>

      {isOpen && (
        <Overlay>
          <Button
            variant="empty"
            onClick={onEditSchedulingFormClose}
            className="absolute right-5 top-5"
          >
            <HiMiniXMark className="stroke-1 text-2xl text-primary" />
          </Button>
          <EditSchedulingForm scheduling={scheduling} />
        </Overlay>
      )}
    </>
  );
}
