import { HiMiniXMark } from "react-icons/hi2";
import Button from "../../../../components/Button";
import Message from "../../../../components/Message";

import { User } from "../../../../types/user.type";
import { formatDateTime } from "../../../../utils/formatTime";
import AccountField from "./AccountField";

const options = {
  dateStyle: "full",
} as const;

type Props = {
  users: User[];
  isLoading: boolean;
  isDeleting: boolean;
  error: string;
  onDeleteAccount: (id: string) => void;
};

export default function AccountsList({
  users,
  // isLoading,
  isDeleting,
  error,
  onDeleteAccount,
}: Props) {
  if (error) {
    return <Message>Something went wrong...</Message>;
  }

  return (
    <ul className="space-y-4">
      {users.map(
        ({ id, username, email, specialization, group, createdAt }) => (
          <li key={id} className="space-y-2 rounded-lg bg-white p-4">
            <div className="flex items-center gap-4">
              <div className="w-min whitespace-nowrap rounded-lg bg-primary px-2 py-1 text-white">
                <span>Id: </span>
                {id}
              </div>
              <div className="w-min whitespace-nowrap rounded-lg bg-primary px-2 py-1 text-white">
                <span>Created: </span>
                {formatDateTime("en-US", createdAt, options)}
              </div>
              <Button
                variant="empty"
                className="ml-auto"
                disabled={isDeleting}
                onClick={() => onDeleteAccount(id)}
              >
                <HiMiniXMark className="stroke-1 text-2xl text-red-500" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {username && <AccountField field="username" value={username} />}
              <AccountField field="email" value={email} />
              {specialization && (
                <AccountField field="specialization" value={specialization} />
              )}
              {group && <AccountField field="group" value={group} />}
            </div>
          </li>
        ),
      )}
    </ul>
  );
}
