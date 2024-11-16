import { AccountToDelete } from "./DeleteAccountsForm";

type Props = {
  accounts: AccountToDelete[];
};

export default function AccountsToDeleteList({ accounts }: Props) {
  return (
    <ul className="rounded-lg bg-white p-4">
      {accounts.map((account) => (
        <li key={account.id} className="flex items-center gap-4">
          <span>{`${account.id}.) `}</span>
          <span>{account.email}</span>
        </li>
      ))}
    </ul>
  );
}
