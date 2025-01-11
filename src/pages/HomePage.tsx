import { Outlet, useLocation } from "react-router";
import CalendarHeader from "../features/calendar/components/CalendarHeader";
import CalendarNav from "../features/calendar/components/CalendarNav";
import CalendarFilters from "../features/calendar/components/CalendarFilters";

export default function HomePage() {
  const location = useLocation();

  return (
    <div className="space-y-4 rounded-lg bg-secondary p-4 sm:p-6">
      <CalendarHeader />
      <CalendarNav />
      <CalendarFilters key={location.key} />
      <Outlet />
    </div>
  );
}
