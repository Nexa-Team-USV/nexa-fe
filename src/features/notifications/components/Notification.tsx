import { HiMiniXMark } from "react-icons/hi2";
import Button from "../../../components/Button";

export default function Notification() {
  return (
    <li className="space-y-3 rounded-md bg-blue-100 p-2">
      <div className="flex items-center justify-between text-primary">
        <span className="font-semibold">12:25 PM</span>
        <Button variant="empty">
          <HiMiniXMark className="stroke-1 text-xl" />
        </Button>
      </div>
      <p>New exam schedule proposal!</p>
      <Button size="full">Review</Button>
    </li>
  );
}
