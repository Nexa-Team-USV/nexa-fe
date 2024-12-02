import ProfileInfoSection from "../features/profile/components/profileInfoSection/ProfileInfoSection";
import ChangeProfileSection from "../features/profile/components/profileSection/EditProfileSection";
import AccountsSection from "../features/profile/components/accountsSection/AccountsSection";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <ProfileInfoSection />
      <ChangeProfileSection />
      <AccountsSection />
    </div>
  );
}
