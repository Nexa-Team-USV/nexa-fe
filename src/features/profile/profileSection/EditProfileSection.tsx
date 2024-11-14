import EditPasswordForm from "./EditPasswordForm";
import EditProfileForm from "./EditProfileForm";

export default function EditProfileSection() {
  return (
    <div className="space-y-4 rounded-lg bg-secondary p-6">
      <h2 className="text-3xl font-bold">Profile</h2>
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Edit profile</h3>
          <EditProfileForm />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Change password</h3>
          <EditPasswordForm />
        </div>
      </div>
    </div>
  );
}
