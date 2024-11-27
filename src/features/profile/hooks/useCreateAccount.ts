import { useState } from "react";
import { CreateAccount } from "../../../types/user.type";
import { UserApi } from "../../../api/UserApi";

export function useCreateAccount() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>("");

  function createAccount(data: CreateAccount) {
    setIsLoading(true);
    UserApi.createAccount(data)
      .then((res) => {
        setMessage("");
        setError("");
        setMessage(res);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { createAccount, message, isLoading, error };
}
