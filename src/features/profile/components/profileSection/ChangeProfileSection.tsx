import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import SubSectionTitle from "../SubSectionTitle";
import ChangePasswordForm from "./ChangePasswordForm";
import ChangeProfileForm from "./ChangeProfileForm";
import ProfileSubSectionContainer from "./ProfileSubSectionContainer";

export default function ChangeProfileSection() {
  return (
    <ProfileSection>
      <SectionTitle>Profile</SectionTitle>
      <div className="space-y-8">
        <ProfileSubSectionContainer>
          <SubSectionTitle>Edit profile</SubSectionTitle>
          <ChangeProfileForm />
        </ProfileSubSectionContainer>
        <ProfileSubSectionContainer>
          <SubSectionTitle>Change password</SubSectionTitle>
          <ChangePasswordForm />
        </ProfileSubSectionContainer>
      </div>
    </ProfileSection>
  );
}
