import CreateAccountsForm from "./CreateAccountsForm";

export default function CreateAccountsSection() {
  return (
    <div className="space-y-4 rounded-lg bg-secondary p-6">
      <h2 className="text-3xl font-bold">Create accounts</h2>
      <CreateAccountsForm />
    </div>
  );
}
