import {
  HiMiniClipboard,
  HiMiniClock,
  HiMiniMapPin,
  HiMiniUserGroup,
} from "react-icons/hi2";

export default function SchedulingCard() {
  return (
    <div className="flex rounded-lg border-2 border-primary bg-white p-2 pl-0">
      <div className="flex flex-col items-center border-r-2 border-primary px-8 py-2 text-primary">
        <div className="text-lg font-bold">Wed</div>
        <div className="text-4xl font-bold">28</div>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-x-10 py-2 pl-8">
        <div className="flex items-center gap-2">
          <HiMiniClock className="text-xl text-primary" />
          <p className="font-medium">09:00 - 10:00</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniClipboard className="text-xl text-primary" />
          <p className="font-medium">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniMapPin className="text-xl text-primary" />
          <p className="font-medium">C208, C209</p>
        </div>
        <div className="flex items-center gap-2">
          <HiMiniUserGroup className="text-xl text-primary" />
          <p className="font-medium">Prof1, Prof2, Prof3</p>
        </div>
      </div>
    </div>
  );
}
