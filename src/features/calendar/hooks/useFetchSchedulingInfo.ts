import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { SchedulingsApi } from "../../../api/SchedulingsApi";
import { UserApi } from "../../../api/UserApi";
import { mapUser } from "../../../utils/mapUser";

export function useFetchSchedulingInfo(
  schedulingId: string,
  teacherId: string,
) {
  const [classrooms, setClassrooms] = useState<string[]>([]);
  const [teacherName, setTeacherName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    Promise.all([
      SchedulingsApi.getClassrooms(schedulingId),
      UserApi.getUser(teacherId),
    ])
      .then((res) => {
        const classroomsList = res[0];
        const teacherData = mapUser(res[1]);
        const teacherName = teacherData.username
          ? teacherData.username
          : teacherData.email;

        setClassrooms(classroomsList);
        setTeacherName(teacherName);
      })
      .catch((error) => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
  }, [schedulingId, teacherId]);

  return { teacherName, classrooms, isLoading };
}
