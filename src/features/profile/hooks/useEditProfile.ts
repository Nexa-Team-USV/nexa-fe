import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { EditProfile, EditUsername } from "../../../types/user.type";
import { UserApi } from "../../../api/UserApi";
import { UserContext } from "../../../contexts/UserContext";
import { mapUser } from "../../../utils/mapUser";

export function useEditProfile() {
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleEditProfile(
    data: EditProfile | EditUsername,
    onSuccess?: () => void,
  ) {
    setIsLoading(false);
    UserApi.editProfile(data)
      .then((res) => {
        const user = mapUser(res.user);
        setUser(user);

        if (onSuccess) onSuccess();

        toast.success(res.message);
      })
      .catch((error) => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { handleEditProfile, isLoading };
}
