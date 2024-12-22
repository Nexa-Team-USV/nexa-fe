import { useContext } from "react";

import {
  HiMiniClipboard,
  HiMiniClock,
  HiMiniMapPin,
  HiMiniUser,
  HiMiniUserGroup,
} from "react-icons/hi2";
import SchedulingCardDropdown from "./SchedulingCardDropdown";
import SchedulingCardSkeleton from "../schedulingCardSkeleton/SchedulingCardSkeleton";
import SchedulingCardDescription from "./SchedulingCardDescription";

import { Scheduling } from "../../../../types/schedule.type";
import { formatDateTime } from "../../../../utils/formatTime";
import { useFetchSchedulingInfo } from "../../hooks/useFetchSchedulingInfo";
import { UserContext } from "../../../../contexts/UserContext";

type Props = {
  scheduling: Scheduling;
};

const options = {
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  timeZone: "UTC",
} as const;

export default function SchedulingCard({ scheduling }: Props) {
  const {
    id,
    title,
    group,
    date,
    startTime,
    endTime,
    assistants,
    description,
    teacherId,
  } = scheduling;
  const {
    user: { role },
  } = useContext(UserContext);
  const { teacherName, classrooms, isLoading } = useFetchSchedulingInfo(
    id,
    teacherId,
  );
  const dateString = new Date(date).toDateString().split(" ");
  const weekDay = dateString[0];
  const day = dateString[2];

  if (isLoading) {
    return <SchedulingCardSkeleton />;
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-primary bg-white p-2 xsm:flex-row xsm:gap-0 xsm:pl-0 sm:items-center">
      <div className="flex flex-col items-center justify-center border-b-2 border-primary px-8 py-2 text-primary xsm:border-transparent">
        <div className="text-lg font-bold">{weekDay}</div>
        <div className="text-4xl font-bold">{day}</div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm font-medium xsm:border-l-2 xsm:border-primary xsm:py-2 xsm:pl-4 sm:grid-cols-[auto_auto] md:gap-x-10 md:pl-8 lg:grid-cols-[auto_auto_auto]">
        <div className="flex items-center gap-2">
          <HiMiniClock className="text-xl text-primary" />
          <p>{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniClock className="text-xl text-primary" />
          <p className="flex items-center gap-1">
            <span>{formatDateTime("en-US", startTime, options)}</span>
            <span>-</span>
            <span>{formatDateTime("en-US", endTime, options)}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniClipboard className="text-xl text-primary" />
          <p>{group}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniUser className="text-xl text-primary" />
          <p>{teacherName}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniMapPin className="text-xl text-primary" />
          <p>{classrooms.join(", ")}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniUserGroup className="self-start text-xl text-primary" />
          <p>{assistants}</p>
        </div>
      </div>

      <div className="ml-auto flex flex-row-reverse items-center gap-2 xsm:flex-col">
        {role === "teacher" && (
          <SchedulingCardDropdown scheduling={{ ...scheduling, classrooms }} />
        )}
        {description && <SchedulingCardDescription description={description} />}
      </div>
    </div>
  );
}
