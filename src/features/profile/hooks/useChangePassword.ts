import { useState } from "react";
import toast from "react-hot-toast";

import { UserApi } from "../../../api/UserApi";
import { ChangePassword } from "../../../types/user.type";

export function useChangePassword() {
  const [isLoading, setIsLoading] = useState<boolean>();

  function handleChangePassword(data: ChangePassword, onSuccess?: () => void) {
    setIsLoading(true);
    UserApi.changePassword(data)
      .then((res) => {
        if (onSuccess) onSuccess();

        toast.success(res);
      })
      .catch((error) => toast.error(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { handleChangePassword, isLoading };
}
