import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import SubSectionTitle from "../SubSectionTitle";
import EditPasswordForm from "./EditPasswordForm";
import EditProfileForm from "./EditProfileForm";
import ProfileSubSectionContainer from "./ProfileSubSectionContainer";

export default function EditProfileSection() {
  return (
    <ProfileSection>
      <SectionTitle>Profile</SectionTitle>
      <div className="space-y-8">
        <ProfileSubSectionContainer>
          <SubSectionTitle>Edit profile</SubSectionTitle>
          <EditProfileForm />
        </ProfileSubSectionContainer>
        <ProfileSubSectionContainer>
          <SubSectionTitle>Change password</SubSectionTitle>
          <EditPasswordForm />
        </ProfileSubSectionContainer>
      </div>
    </ProfileSection>
  );
}
