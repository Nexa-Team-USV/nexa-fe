import { AccountToCreate } from "./CreateAccountsForm";
import Button from "../../../components/Button";
import { HiMiniXMark } from "react-icons/hi2";

type Props = {
  accounts: AccountToCreate[];
  onDeleteAccount: (id: number) => void;
};

export default function AccountsToCreateList({
  accounts,
  onDeleteAccount,
}: Props) {
  return (
    <ul className="flex flex-col gap-1.5 rounded-lg bg-white p-2 sm:p-4">
      {accounts.map((account, i) => (
        <li key={account.id} className="flex items-center gap-1">
          <span>{`${i + 1}.) `}</span>
          <div className="grid w-full grid-cols-[90fr_auto_auto] items-center gap-2 sm:grid-cols-3 sm:gap-12">
            <span>{account.email}</span>
            <span>{account.role}</span>
            <Button
              variant="empty"
              onClick={() => onDeleteAccount(account.id)}
              className="ml-auto"
            >
              <HiMiniXMark className="stroke-1 text-2xl text-primary" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
