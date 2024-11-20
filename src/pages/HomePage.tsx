import { Outlet } from "react-router";
import CalendarHeader from "../features/calendar/CalendarHeader";
import CalendarNav from "../features/calendar/CalendarNav";
import CalendarFilters from "../features/calendar/CalendarFilters";

export default function HomePage() {
  return (
    <div className="space-y-4 rounded-lg bg-secondary p-4 sm:p-6">
      <CalendarHeader />
      <CalendarNav />
      <CalendarFilters />
      <Outlet />
    </div>
  );
}
