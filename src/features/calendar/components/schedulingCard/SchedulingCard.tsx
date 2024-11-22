import {
  HiMiniClipboard,
  HiMiniClock,
  HiMiniMapPin,
  HiMiniUserGroup,
} from "react-icons/hi2";
import SchedulingCardDropdown from "./SchedulingCardDropdown";
import { formatTime } from "../../../../utils/formatTime";
import { Scheduling } from "../../../../types/schedule.type";

type Props = {
  scheduling: Scheduling;
};

const options = {
  hour: "numeric",
  minute: "numeric",
  hour12: false,
} as const;

export default function SchedulingCard({ scheduling }: Props) {
  const { startTime, endTime, description, date } = scheduling;
  const dateString = new Date(date).toDateString().split(" ");
  const weekDay = dateString[0];
  const day = dateString[2];

  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-primary bg-white p-2 xsm:flex-row xsm:gap-0 xsm:pl-0 sm:items-center">
      <div className="flex flex-col items-center justify-center border-b-2 border-primary px-8 py-2 text-primary xsm:border-r-2 xsm:border-b-transparent">
        <div className="text-lg font-bold">{weekDay}</div>
        <div className="text-4xl font-bold">{day}</div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm font-medium xsm:py-2 xsm:pl-4 sm:grid-cols-[auto_1fr] md:gap-x-10 md:pl-8">
        <div className="flex items-center gap-2">
          <HiMiniClock className="text-xl text-primary" />
          <p className="flex items-center gap-1">
            <span>{formatTime("en-US", startTime, options)}</span>
            <span>-</span>
            <span>{formatTime("en-US", endTime, options)}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniClipboard className="text-xl text-primary" />
          <p className="">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniMapPin className="text-xl text-primary" />
          <p className="">C208, C209</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniUserGroup className="text-xl text-primary" />
          <p className="">Prof1, Prof2, Prof3</p>
        </div>
      </div>

      <div className="ml-auto">
        <SchedulingCardDropdown />
      </div>
    </div>
  );
}
