import Button from "../../components/Button";
import Notification from "./Notification";

export default function Notifications() {
  return (
    <div className="flex h-96 w-96 flex-col gap-4 rounded-md border-2 border-primary bg-white p-4">
      <div className="flex items-center gap-3">
        <h3 className="mr-auto text-xl font-medium">Notifications</h3>
        <Button>Clear all</Button>
      </div>
      <ul className="scrollbar flex h-full flex-col gap-3 overflow-y-scroll pr-2">
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </ul>
    </div>
  );
}
