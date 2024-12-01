import { useCallback, useEffect, useState } from "react";

import { CreateAccount, Role, User, Users } from "../../../types/user.type";
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
  const [error, setError] = useState<string>("");
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [creatingError, setCreatingError] = useState<string>("");
  const [deletingError, setDeletingError] = useState<string>("");

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
        console.log(res.pages, res.users.length, PAGE_LIMIT, currentPage);

        setPages(res.pages);
        setCurrentPage((prev) =>
          res.users.length < PAGE_LIMIT ? res.pages : prev,
        );
        setUsers(newUsers);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }, [role, currentPage]);

  function handleCreateAccount(data: CreateAccount) {
    setIsLoading(true);
    UserApi.createAccount(data)
      .then(() => {
        console.log("Adaugat");
        handleFetchUsers();
      })
      .catch((error) => setCreatingError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  function handleDeleteAccount(id: string) {
    setIsLoading(true);
    UserApi.deleteAccount(id)
      .then(() => {
        console.log("Sters");
        handleFetchUsers();
      })
      .catch((error) => setDeletingError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    console.log("Fetch");
    handleFetchUsers();
  }, [handleFetchUsers]);

  return {
    handleCreateAccount,
    handleDeleteAccount,
    role,
    users: users[role],
    isLoading,
    error,
    creatingError,
    deletingError,
    currentPage,
    pages,
    setRole,
    setCurrentPage,
  };
}
