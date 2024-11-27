import ProfileSection from "../ProfileSection";
import SectionTitle from "../SectionTitle";
import DeleteAccountForm from "./DeleteAccountForm";

export default function DeleteAccountSection() {
  return (
    <ProfileSection>
      <SectionTitle>Delete account</SectionTitle>
      <DeleteAccountForm />
    </ProfileSection>
  );
}
