import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { CreateAccount, Role, Users } from "../../../types/user.type";
import { UserApi } from "../../../api/UserApi";
import { mapUser } from "../../../utils/mapUser";

const PAGE_LIMIT = 4;

export function useAccounts() {
  const [role, setRole] = useState<Role>("student");
  const [users, setUsers] = useState<Users>({
    student: [],
    teacher: [],
    admin: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleFetchUsers = useCallback(() => {
    setIsLoading(true);
    UserApi.getUsers(role, PAGE_LIMIT, currentPage)
      .then((res) => {
        const mappedUsers = res.users.map((user) => mapUser(user));
        const newUsers = JSON.parse(JSON.stringify(users));
        newUsers[role] = [];

        mappedUsers.forEach((user) => {
          newUsers[user.role].push(user);
        });

        setPages(res.pages);
        setCurrentPage((prev) =>
          res.users.length === 0 && res.pages >= 1 ? prev - 1 : prev,
        );
        setUsers(newUsers);
      })
      .catch(() => toast.error("Couldn't fetch the users!"))
      .finally(() => setIsLoading(false));
  }, [role, currentPage]);

  const handleCreateAccount = useCallback(
    function (data: CreateAccount) {
      setIsLoading(true);
      UserApi.createAccount(data)
        .then((res) => {
          toast.success(res);
          handleFetchUsers();
        })
        .catch((error) => toast.error(error.response.data.message))
        .finally(() => setIsLoading(false));
    },
    [handleFetchUsers],
  );

  const handleDeleteAccount = useCallback(
    function (id: string) {
      setIsLoading(true);
      UserApi.deleteAccount(id)
        .then((res) => {
          toast.success(res);
          handleFetchUsers();
        })
        .catch((error) => toast.error(error.response.data.message))
        .finally(() => setIsLoading(false));
    },
    [handleFetchUsers],
  );

  useEffect(() => {
    handleFetchUsers();
  }, [handleFetchUsers]);

  return {
    handleCreateAccount,
    handleDeleteAccount,
    role,
    users: users[role],
    isLoading,
    currentPage,
    pages,
    setRole,
    setCurrentPage,
  };
}
