import SchedulingCard from "./schedulingCard/SchedulingCard";
import Loader from "../../../components/Loader";
import { useSearchParams } from "react-router-dom";

import { useFetchSchedulings } from "../hooks/useFetchSchedulings";

export default function SchedulingsCalendar() {
  const { schedulings, isLoading } = useFetchSchedulings();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return (
      <div className="flex h-60 w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!Array.from(searchParams.entries()).length) {
    return (
      <p>
        You should select your study type and group to see your schedulings!
      </p>
    );
  }

  return (
    <ul className="space-y-6">
      {schedulings.map(({ month, monthSchedulings }) => (
        <li key={month} className="space-y-2">
          <h2 className="text-xl font-semibold">{month}</h2>
          <ul key={month} className="space-y-4">
            {monthSchedulings.map((scheduling) => (
              <SchedulingCard key={scheduling.id} scheduling={scheduling} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
