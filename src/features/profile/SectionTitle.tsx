type Props = {
  children: string;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-2xl font-bold xsm:text-3xl sm:text-3xl">{children}</h2>
  );
}
