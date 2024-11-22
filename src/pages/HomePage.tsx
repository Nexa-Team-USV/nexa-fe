import { Outlet } from "react-router";
import CalendarHeader from "../features/calendar/components/CalendarHeader";
import CalendarNav from "../features/calendar/components/CalendarNav";
import CalendarFilters from "../features/calendar/components/CalendarFilters";

import SchedulingsProvider from "../contexts/SchedulingsContext";

export default function HomePage() {
  return (
    <SchedulingsProvider>
      <div className="space-y-4 rounded-lg bg-secondary p-4 sm:p-6">
        <CalendarHeader />
        <CalendarNav />
        <CalendarFilters />
        <Outlet />
      </div>
    </SchedulingsProvider>
  );
}
