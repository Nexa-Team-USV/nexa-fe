import { useContext } from "react";

import ProfileData from "./ProfileData";

import { UserContext } from "../../../../contexts/UserContext";
import { formatDateTime } from "../../../../utils/formatTime";

const options = {
  dateStyle: "full",
} as const;

export default function ProfileInfo() {
  const { user } = useContext(UserContext);
  const { username, email, specialization, group, role, createdAt } = user;

  return (
    <div className="grid grid-cols-1 gap-3">
      {username && <ProfileData title="Username" data={username} />}
      {email && <ProfileData title="Email" data={email} />}
      {specialization && (
        <ProfileData title="Specialization" data={specialization} />
      )}
      {group && <ProfileData title="Group" data={group} />}
      {role && <ProfileData title="Role" data={role} />}
      {createdAt && (
        <ProfileData
          title="Account created at"
          data={formatDateTime("en-US", createdAt, options)}
        />
      )}
    </div>
  );
}
