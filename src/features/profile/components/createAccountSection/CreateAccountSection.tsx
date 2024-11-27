import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import CreateAccountForm from "./CreateAccountForm";

export default function CreateAccountSection() {
  return (
    <ProfileSection>
      <SectionTitle>Create account</SectionTitle>
      <CreateAccountForm />
    </ProfileSection>
  );
}
