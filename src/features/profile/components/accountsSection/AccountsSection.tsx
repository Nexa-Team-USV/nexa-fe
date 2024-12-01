import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import CreateAccountForm from "./CreateAccountForm";
import AccountsList from "./AccountsList";
import AccountsFilter from "./AccountsFilter";

import { useAccounts } from "../../hooks/useAccounts";

export default function CreateAccountSection() {
  const {
    handleCreateAccount,
    handleDeleteAccount,
    role,
    users,
    isLoading,
    isCreating,
    isDeleting,
    error,
    creatingError,
    deletingError,
    setRole,
  } = useAccounts();

  return (
    <ProfileSection>
      <SectionTitle>Accounts</SectionTitle>
      <CreateAccountForm
        onCreateAccount={handleCreateAccount}
        isCreating={isCreating}
      />
      <div className="flex items-center gap-4">
        <AccountsFilter role={role} setRole={setRole} />
        {(isLoading || isCreating || isDeleting) && (
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-transparent border-t-primary"></div>
        )}
      </div>
      <AccountsList
        users={users}
        isLoading={isLoading}
        isDeleting={isDeleting}
        error={error}
        onDeleteAccount={handleDeleteAccount}
      />
    </ProfileSection>
  );
}
