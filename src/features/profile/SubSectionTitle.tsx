type Props = {
  children: string;
};

export default function SubSectionTitle({ children }: Props) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}
