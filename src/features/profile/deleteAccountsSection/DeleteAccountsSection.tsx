import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import DeleteAccountsForm from "./DeleteAccountsForm";

export default function DeleteAccountsSection() {
  return (
    <ProfileSection>
      <SectionTitle>Delete accounts</SectionTitle>
      <DeleteAccountsForm />
    </ProfileSection>
  );
}
