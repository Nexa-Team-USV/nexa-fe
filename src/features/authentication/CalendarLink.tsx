import { HiArrowSmallLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function CalendarLink() {
  return (
    <Link to="/" className="flex items-center gap-1 font-medium text-primary">
      <HiArrowSmallLeft className="stroke-1" />
      <span>Go to calendar</span>
    </Link>
  );
}
