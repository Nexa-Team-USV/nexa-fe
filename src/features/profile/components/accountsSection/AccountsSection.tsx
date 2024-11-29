import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import CreateAccountForm from "./CreateAccountForm";
import AccountsList from "./AccountsList";
import AccountsFilter from "./AccountsFilter";

import { useFetchAccounts } from "../../hooks/useFetchAccounts";

export default function CreateAccountSection() {
  const { role, accounts, isLoading, error, setRole } = useFetchAccounts();

  console.log(accounts, isLoading, error);

  return (
    <ProfileSection>
      <SectionTitle>Accounts</SectionTitle>
      <CreateAccountForm />
      <AccountsFilter role={role} setRole={setRole} />
      <AccountsList />
    </ProfileSection>
  );
}
