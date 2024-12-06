import { useContext } from "react";

import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import SubSectionTitle from "../SubSectionTitle";
import ChangePasswordForm from "./ChangePasswordForm";
import EditProfileForm from "./EditProfileForm";
import ProfileSubSectionContainer from "./ProfileSubSectionContainer";
import EditUsernameForm from "./EditUsernameForm";

import { UserContext } from "../../../../contexts/UserContext";

export default function ChangeProfileSection() {
  const {
    user: { role },
  } = useContext(UserContext);

  return (
    <ProfileSection>
      <SectionTitle>Profile</SectionTitle>
      <div className="space-y-8">
        <ProfileSubSectionContainer>
          <SubSectionTitle>Edit profile</SubSectionTitle>
          {role === "student" ? <EditProfileForm /> : <EditUsernameForm />}
        </ProfileSubSectionContainer>
        <ProfileSubSectionContainer>
          <SubSectionTitle>Change password</SubSectionTitle>
          <ChangePasswordForm />
        </ProfileSubSectionContainer>
      </div>
    </ProfileSection>
  );
}
