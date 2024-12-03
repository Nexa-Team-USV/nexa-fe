type Props = {
  title: string;
  data: string;
};

export default function ProfileData({ title, data }: Props) {
  return (
    <div>
      <span className="font-medium">{`${title}: `}</span>
      <span>{data}</span>
    </div>
  );
}
