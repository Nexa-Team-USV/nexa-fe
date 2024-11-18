import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import SubSectionTitle from "../SubSectionTitle";
import EditPasswordForm from "./EditPasswordForm";
import EditProfileForm from "./EditProfileForm";
import SubSectionContainer from "./SubSectionContainer";

export default function EditProfileSection() {
  return (
    <ProfileSection>
      <SectionTitle>Profile</SectionTitle>
      <div className="space-y-8">
        <SubSectionContainer>
          <SubSectionTitle>Edit profile</SubSectionTitle>
          <EditProfileForm />
        </SubSectionContainer>
        <SubSectionContainer>
          <SubSectionTitle>Change password</SubSectionTitle>
          <EditPasswordForm />
        </SubSectionContainer>
      </div>
    </ProfileSection>
  );
}
