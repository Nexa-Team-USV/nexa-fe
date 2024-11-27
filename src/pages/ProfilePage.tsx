import ProfileInfoSection from "../features/profile/components/profileInfoSection/ProfileInfoSection";
import EditProfileSection from "../features/profile/components/profileSection/EditProfileSection";
import CreateAccountsSection from "../features/profile/components/createAccountsSection/CreateAccountsSection";
import DeleteAccountsSection from "../features/profile/components/deleteAccountsSection/DeleteAccountsSection";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <ProfileInfoSection />
      <EditProfileSection />
      <CreateAccountsSection />
      <DeleteAccountsSection />
    </div>
  );
}
