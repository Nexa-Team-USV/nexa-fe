import { useEffect, useState } from "react";

import { CreateAccount, Role, User, Users } from "../../../types/user.type";
import { UserApi } from "../../../api/UserApi";
import { mapUser } from "../../../utils/mapUser";

export function useAccounts() {
  const [role, setRole] = useState<Role>("");
  const [users, setUsers] = useState<Users>({
    student: [],
    teacher: [],
    admin: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [creatingError, setCreatingError] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [deletingError, setDeletingError] = useState<string>("");

  function handleCreateAccount(data: CreateAccount) {
    setIsCreating(true);
    UserApi.createAccount(data)
      .then((res) => {
        const user = mapUser(res);
        const newUsers = JSON.parse(JSON.stringify(users));

        newUsers[user.role].push(user);

        setRole(user.role);
        setUsers(newUsers);
      })
      .catch((error) => setCreatingError(error.response.data.message))
      .finally(() => setIsCreating(false));
  }

  function handleDeleteAccount(id: string) {
    setIsDeleting(true);
    UserApi.deleteAccount(id)
      .then((res) => {
        const user = mapUser(res);
        const newUsers = JSON.parse(JSON.stringify(users));

        newUsers[user.role] = newUsers[user.role].filter(
          (item: User) => item.id !== user.id,
        );

        setUsers(newUsers);
      })
      .catch((error) => setDeletingError(error.response.data.message))
      .finally(() => setIsDeleting(false));
  }

  useEffect(() => {
    setIsLoading(true);
    UserApi.getUsers(role)
      .then((res) => {
        const mappedUsers = res.map((user) => mapUser(user));
        const newUsers = JSON.parse(JSON.stringify(users));
        newUsers[role === "" ? "student" : role] = [];

        mappedUsers.forEach((user) => {
          newUsers[user.role].push(user);
        });

        setUsers(newUsers);
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setIsLoading(false));
  }, [role]);

  return {
    handleCreateAccount,
    handleDeleteAccount,
    role,
    users: users[role === "" ? "student" : role],
    isLoading,
    isCreating,
    isDeleting,
    error,
    creatingError,
    deletingError,
    setRole,
  };
}
