import { useContext, useEffect } from "react";

import { UserContext } from "../contexts/UserContext";
import { UserApi } from "../api/UserApi";
import { mapUser } from "../utils/mapUser";

export function useFetchUser() {
  const { isLoading, setUser, setIsLoading, setError } =
    useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    UserApi.getCurrentUser()
      .then((res) => {
        const user = mapUser(res);
        setUser(user);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }, [setIsLoading, setUser, setError]);

  return { isLoading };
}
