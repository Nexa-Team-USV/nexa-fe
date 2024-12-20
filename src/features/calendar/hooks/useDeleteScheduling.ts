import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { SchedulingsApi } from "../../../api/SchedulingsApi";
import { SchedulingsContext } from "../../../contexts/SchedulingsContext";

export function useDeleteScheduling() {
  const { setSchedulings } = useContext(SchedulingsContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function deleteScheduling(schedulingId: string) {
    setIsLoading(true);
    SchedulingsApi.deleteScheduling(schedulingId)
      .then((res) => {
        setSchedulings((prev) => [
          ...prev.map((item) => {
            return {
              ...item,
              monthSchedulings: [
                ...item.monthSchedulings.filter(
                  (scheduling) => scheduling.id !== schedulingId,
                ),
              ],
            };
          }),
        ]);

        toast.success(res);
      })
      .catch((error) => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { deleteScheduling, isLoading };
}
