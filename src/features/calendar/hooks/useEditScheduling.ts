import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { SchedulingsContext } from "../../../contexts/SchedulingsContext";
import { EditScheduling, Scheduling } from "../../../types/schedule.type";
import { SchedulingsApi } from "../../../api/SchedulingsApi";
import { mapScheduling } from "../../../utils/mapScheduling";

export function useEditScheduling() {
  const { schedulings, setSchedulings } = useContext(SchedulingsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function editScheduling(schedulingId: string, data: EditScheduling) {
    setIsLoading(true);
    SchedulingsApi.editScheduling(schedulingId, data)
      .then((res) => {
        const scheduling = mapScheduling(res);
        const month = new Date(scheduling.date).getMonth();

        const schedulingsCopy = JSON.parse(JSON.stringify(schedulings));
        const schedulingIndex = schedulingsCopy[
          month
        ].monthSchedulings.findIndex(
          (scheduling: Scheduling) => scheduling.id === schedulingId,
        );

        const monthSchedulings = schedulingsCopy[month].monthSchedulings.filter(
          (scheduling: Scheduling) => scheduling.id !== schedulingId,
        );

        schedulingsCopy[month].monthSchedulings = [
          ...monthSchedulings.slice(0, schedulingIndex),
          scheduling,
          ...monthSchedulings.slice(schedulingIndex, monthSchedulings.length),
        ];

        setSchedulings(schedulingsCopy);

        toast.success("Scheduling edited!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      })
      .finally(() => setIsLoading(false));
  }

  return { editScheduling, isLoading };
}
