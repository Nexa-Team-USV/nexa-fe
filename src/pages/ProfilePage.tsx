import ProfileInfoSection from "../features/profile/components/profileInfoSection/ProfileInfoSection";
import ChangeProfileSection from "../features/profile/components/profileSection/ChangeProfileSection";
import CreateAccountSection from "../features/profile/components/createAccountSection/CreateAccountSection";
import DeleteAccountSection from "../features/profile/components/deleteAccountSection/DeleteAccountSection";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <ProfileInfoSection />
      <ChangeProfileSection />
      <CreateAccountSection />
      <DeleteAccountSection />
    </div>
  );
}
