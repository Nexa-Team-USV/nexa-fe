import { useState } from "react";
import { UserApi } from "../../../api/UserApi";
import { ChangePassword } from "../../../types/user.type";

export function useChangePassword() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>("");

  function changePassword(data: ChangePassword) {
    setIsLoading(true);
    UserApi.changePassword(data)
      .then((res) => {
        setMessage("");
        setError("");
        setMessage(res);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { changePassword, message, isLoading, error, setMessage, setError };
}
