import { capitalize } from "../../../../utils/capitalize";

type Props = {
  field: string;
  value: string;
};

export default function AccountField({ field, value }: Props) {
  return (
    <div className="whitespace-nowrap">
      <span className="font-medium">{capitalize(field)}: </span>
      {value}
    </div>
  );
}
