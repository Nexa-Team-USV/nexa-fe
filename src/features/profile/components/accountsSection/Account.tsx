import { useState } from "react";

import { HiMiniXMark } from "react-icons/hi2";
import Button from "../../../../components/Button";
import AccountField from "./AccountField";
import Overlay from "../../../../components/Overlay";
import ConfirmationModal from "../../../../components/ConfirmationModal";

import { formatDateTime } from "../../../../utils/formatTime";
import { User } from "../../../../types/user.type";

const options = {
  dateStyle: "full",
} as const;

type Props = {
  user: User;
  isLoading: boolean;
  onDeleteAccount: (id: string) => void;
};

export default function Account({ user, isLoading, onDeleteAccount }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { id, username, email, studyType, group, createdAt } = user;

  return (
    <>
      <li key={id} className="space-y-2 rounded-lg bg-white p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="w-min whitespace-nowrap rounded-lg bg-primary px-2 py-1 text-white">
            <span>Id: </span>
            {id}
          </div>
          <div className="w-min whitespace-nowrap rounded-lg bg-primary px-2 py-1 text-white">
            <span>Created: </span>
            {formatDateTime("en-US", createdAt, options)}
          </div>
          <Button
            variant="reject"
            className="block w-min md:hidden"
            disabled={isLoading}
            onClick={() => setIsOpen(true)}
          >
            Delete
          </Button>
          <Button
            variant="empty"
            className="hidden md:ml-auto md:block"
            disabled={isLoading}
            onClick={() => setIsOpen(true)}
          >
            <HiMiniXMark className="stroke-1 text-2xl text-red-500" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {username && <AccountField field="username" value={username} />}
          <AccountField field="email" value={email} />
          {studyType && <AccountField field="studyType" value={studyType} />}
          {group && <AccountField field="group" value={group} />}
        </div>
      </li>

      {isOpen && (
        <Overlay className="fixed">
          <ConfirmationModal
            onConfirm={() => onDeleteAccount(id)}
            onReject={() => setIsOpen(false)}
          >
            Are you sure about deleting this user?
          </ConfirmationModal>
        </Overlay>
      )}
    </>
  );
}
