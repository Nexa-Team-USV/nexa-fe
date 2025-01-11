import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { SchedulingsApi } from "../../../api/SchedulingsApi";
import { mapScheduling } from "../../../utils/mapScheduling";
import { Schedule } from "../../../types/schedule.type";
import { UserContext } from "../../../contexts/UserContext";
import { SchedulingsContext } from "../../../contexts/SchedulingsContext";

export function useSchedule() {
  const { schedulings, setSchedulings } = useContext(SchedulingsContext);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function schedule(data: Omit<Schedule, "teacher_id">) {
    setIsLoading(true);
    SchedulingsApi.schedule({ ...data, teacher_id: user.id })
      .then((res) => {
        const scheduling = mapScheduling(res);
        const month = new Date(scheduling.date).getMonth();

        const schedulingsCopy = JSON.parse(JSON.stringify(schedulings));

        schedulingsCopy[month].monthSchedulings = [
          ...schedulingsCopy[month].monthSchedulings,
          scheduling,
        ];

        setSchedulings(schedulingsCopy);

        toast.success("Scheduling created!");
      })
      .catch((error) => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { schedule, isLoading };
}
