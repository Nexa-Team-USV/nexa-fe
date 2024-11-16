import { AccountToCreate } from "./CreateAccountsForm";

type Props = {
  accounts: AccountToCreate[];
};

export default function AccountsToCreateList({ accounts }: Props) {
  return (
    <ul className="rounded-lg bg-white p-4">
      {accounts.map((account) => (
        <li key={account.id} className="flex items-center gap-4">
          <span>{`${account.id}.) `}</span>
          <span>{account.email}</span>
          <span>{account.role}</span>
        </li>
      ))}
    </ul>
  );
}
