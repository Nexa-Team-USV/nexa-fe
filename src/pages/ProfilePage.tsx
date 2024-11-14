import CreateAccountsSection from "../features/profile/createAccountsSection/CreateAccountsSection";
import DeleteAccountsSection from "../features/profile/deleteAccountsSection/DeleteAccountsSection";
import EditProfileSection from "../features/profile/profileSection/EditProfileSection";

export default function ProfilePage() {
  return (
    <div className="px-8 py-16">
      <div className="m-auto max-w-screen-lg space-y-16">
        <EditProfileSection />
        <CreateAccountsSection />
        <DeleteAccountsSection />
      </div>
    </div>
  );
}
