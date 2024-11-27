import { useState } from "react";
import { UserApi } from "../../../api/UserApi";

export function useDeleteAccount() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>("");

  function deleteAccount(email: string) {
    setIsLoading(true);
    UserApi.deleteAccount(email)
      .then((res) => {
        setMessage("");
        setError("");
        setMessage(res);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { deleteAccount, message, isLoading, error, setMessage, setError };
}
