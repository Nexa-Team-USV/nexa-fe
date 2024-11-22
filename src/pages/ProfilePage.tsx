import CreateAccountsSection from "../features/profile/components/createAccountsSection/CreateAccountsSection";
import DeleteAccountsSection from "../features/profile/components/deleteAccountsSection/DeleteAccountsSection";
import EditProfileSection from "../features/profile/components/profileSection/EditProfileSection";

export default function ProfilePage() {
  return (
    <div className="space-y-8 sm:space-y-16">
      <EditProfileSection />
      <CreateAccountsSection />
      <DeleteAccountsSection />
    </div>
  );
}
