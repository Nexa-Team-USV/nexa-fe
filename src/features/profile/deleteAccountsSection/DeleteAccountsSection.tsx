import DeleteAccountsForm from "./DeleteAccountsForm";

export default function DeleteAccountsSection() {
  return (
    <div className="space-y-4 rounded-lg bg-secondary p-6">
      <h2 className="text-3xl font-bold">Delete accounts</h2>
      <DeleteAccountsForm />
    </div>
  );
}
