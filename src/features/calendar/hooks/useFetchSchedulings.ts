import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

import {
  monthsWithSchedulings,
  SchedulingsContext,
} from "../../../contexts/SchedulingsContext";
import { SchedulingsApi } from "../../../api/SchedulingsApi";
import { mapScheduling } from "../../../utils/mapScheduling";

export function useFetchSchedulings() {
  const { schedulings, isLoading, setSchedulings, setIsLoading } =
    useContext(SchedulingsContext);
  const location = useLocation();

  useEffect(() => {
    SchedulingsApi.getSchedulings("", location.search)
      .then((res) => {
        const data = res.map((scheduling) => mapScheduling(scheduling));

        const schedulingsCopy = JSON.parse(
          JSON.stringify(monthsWithSchedulings),
        );

        data.forEach((scheduling) => {
          const month = new Date(scheduling.date).getMonth();

          schedulingsCopy[month].monthSchedulings = [
            ...schedulingsCopy[month].monthSchedulings,
            scheduling,
          ];
        });

        setSchedulings(schedulingsCopy);
      })
      .catch((error) => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
  }, [location.search, setIsLoading, setSchedulings]);

  return {
    schedulings: schedulings.filter((month) => month.monthSchedulings.length),
    isLoading,
  };
}
