import { useContext } from "react";

import ProfileInfoSection from "../features/profile/components/profileInfoSection/ProfileInfoSection";
import ChangeProfileSection from "../features/profile/components/profileSection/EditProfileSection";
import AccountsSection from "../features/profile/components/accountsSection/AccountsSection";

import { UserContext } from "../contexts/UserContext";

export default function ProfilePage() {
  const {
    user: { role },
  } = useContext(UserContext);

  return (
    <div className="space-y-8">
      <ProfileInfoSection />
      <ChangeProfileSection />
      {/* {role === "admin" && <AccountsSection />} */}
      <AccountsSection />
    </div>
  );
}
