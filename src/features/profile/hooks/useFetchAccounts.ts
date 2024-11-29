import { useEffect, useState } from "react";
import { User } from "../../../types/user.type";
import { UserApi } from "../../../api/UserApi";
import { mapUser } from "../../../utils/mapUser";

export function useFetchAccounts() {
  const [role, setRole] = useState<string>("");
  const [accounts, setAccounts] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    UserApi.getUsers(role)
      .then((res) => {
        const users = res.map((user) => mapUser(user));
        setAccounts(users);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }, [role]);

  return { role, accounts, isLoading, error, setRole };
}
