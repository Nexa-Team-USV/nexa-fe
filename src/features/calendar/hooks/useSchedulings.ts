import { useContext, useEffect } from "react";

import { SchedulingsContext } from "../../../contexts/SchedulingsContext";
import { SchedulingsApi } from "../../../api/SchedulingsApi";

import { mapSchedules } from "../../../utils/mapSchedules";
import { MonthsWithSchedulings } from "../../../types/schedule.type";

const monthsWithSchedulings: MonthsWithSchedulings[] = [
  {
    month: "January",
    monthSchedulings: [],
  },
  {
    month: "February",
    monthSchedulings: [],
  },
  {
    month: "March",
    monthSchedulings: [],
  },
  {
    month: "April",
    monthSchedulings: [],
  },
  {
    month: "May",
    monthSchedulings: [],
  },
  {
    month: "June",
    monthSchedulings: [],
  },
  {
    month: "July",
    monthSchedulings: [],
  },
  {
    month: "August",
    monthSchedulings: [],
  },
  {
    month: "September",
    monthSchedulings: [],
  },
  {
    month: "October",
    monthSchedulings: [],
  },
  {
    month: "November",
    monthSchedulings: [],
  },
  {
    month: "December",
    monthSchedulings: [],
  },
];

export function useSchedulings() {
  const {
    schedulings,
    isLoading,
    error,
    setSchedulings,
    setIsLoading,
    setError,
  } = useContext(SchedulingsContext);

  useEffect(() => {
    SchedulingsApi.getSchedules()
      .then((res) => {
        const data = mapSchedules(res);
        const months: MonthsWithSchedulings[] = JSON.parse(
          JSON.stringify(monthsWithSchedulings),
        );
        data.forEach((scheduling) => {
          const month = new Date(scheduling.date).getUTCMonth();
          months[month].monthSchedulings.push(scheduling);
          months[month].monthSchedulings.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
          );
        });
        const filteredEmptyMonths = months.filter(
          (month) => month.monthSchedulings.length,
        );
        setSchedulings(filteredEmptyMonths);
        setIsLoading(false);
      })
      .catch((error) => setError(error.response.data.message));
  }, [setSchedulings, setIsLoading, setError]);

  return { schedulings, isLoading, error };
}
