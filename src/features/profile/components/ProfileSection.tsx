import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProfileSection({ children }: Props) {
  return (
    <section className="space-y-4 rounded-lg bg-secondary p-4 sm:p-6">
      {children}
    </section>
  );
}
