import { HiMiniXMark } from "react-icons/hi2";
import { AccountToDelete } from "./DeleteAccountsForm";
import Button from "../../../../components/Button";

type Props = {
  accounts: AccountToDelete[];
  onDeleteAccount: (id: number) => void;
};

export default function AccountsToDeleteList({
  accounts,
  onDeleteAccount,
}: Props) {
  return (
    <ul className="flex flex-col gap-1.5 rounded-lg bg-white p-2 sm:p-4">
      {accounts.map((account, i) => (
        <li key={account.id} className="flex items-center gap-1">
          <span>{`${i + 1}.) `}</span>
          <div className="flex w-full items-center justify-between">
            <span>{account.email}</span>
            <Button variant="empty" onClick={() => onDeleteAccount(account.id)}>
              <HiMiniXMark className="stroke-1 text-2xl text-primary" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
