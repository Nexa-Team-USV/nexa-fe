import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import CreateAccountsForm from "./CreateAccountsForm";

export default function CreateAccountsSection() {
  return (
    <ProfileSection>
      <SectionTitle>Create accounts</SectionTitle>
      <CreateAccountsForm />
    </ProfileSection>
  );
}
