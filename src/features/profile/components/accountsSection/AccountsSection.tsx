import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import CreateAccountForm from "./CreateAccountForm";
import AccountsFilter from "./AccountsFilter";
import MiniLoader from "../../../../components/MiniLoader";
import Pagination from "../../../../components/pagination/Pagination";
import Account from "./Account";

import { useAccounts } from "../../hooks/useAccounts";

export default function CreateAccountSection() {
  const {
    handleCreateAccount,
    handleDeleteAccount,
    role,
    users,
    isLoading,
    currentPage,
    pages,
    setRole,
    setCurrentPage,
  } = useAccounts();

  return (
    <ProfileSection>
      <SectionTitle>Accounts</SectionTitle>
      <CreateAccountForm
        onCreateAccount={handleCreateAccount}
        isLoading={isLoading}
      />
      <div className="flex items-center gap-4">
        <AccountsFilter
          role={role}
          setRole={setRole}
          setCurrentPage={setCurrentPage}
        />
        {isLoading && <MiniLoader />}
      </div>

      <ul className="space-y-4">
        {users.map((user) => (
          <Account
            key={user.id}
            user={user}
            isLoading={isLoading}
            onDeleteAccount={handleDeleteAccount}
          />
        ))}
      </ul>

      {pages > 1 && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
        />
      )}
    </ProfileSection>
  );
}
