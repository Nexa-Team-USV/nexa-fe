import CreateAccountsSection from "../features/profile/createAccountsSection/CreateAccountsSection";
import DeleteAccountsSection from "../features/profile/deleteAccountsSection/DeleteAccountsSection";
import EditProfileSection from "../features/profile/profileSection/EditProfileSection";

export default function ProfilePage() {
  return (
    <div className="space-y-8 sm:space-y-16">
      <EditProfileSection />
      <CreateAccountsSection />
      <DeleteAccountsSection />
    </div>
  );
}
