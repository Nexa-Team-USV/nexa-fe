import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import Button from "../../../../components/Button";

import { Role } from "../../../../types/user.type";

const links = [
  {
    value: "",
    text: "Students",
  },
  {
    value: "teacher",
    text: "Teachers",
  },
  {
    value: "admin",
    text: "Admins",
  },
] as const;

type Props = {
  role: Role;
  setRole: Dispatch<SetStateAction<Role>>;
};

export default function AccountsFilter({ role, setRole }: Props) {
  return (
    <ul className="flex w-full items-center justify-between gap-2 rounded-lg border-2 border-primary bg-secondary p-1 sm:w-min sm:justify-normal">
      {links.map(({ value, text }) => (
        <li key={value} className="w-full">
          <Button
            size="full"
            onClick={() => setRole(value)}
            className={twMerge(
              "bg-transparent px-4 text-center text-primary hover:bg-white",
              role === value && "bg-white",
            )}
          >
            {text}
          </Button>
        </li>
      ))}
    </ul>
  );
}
