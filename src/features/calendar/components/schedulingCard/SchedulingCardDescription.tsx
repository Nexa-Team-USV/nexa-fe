import { HiMiniInformationCircle } from "react-icons/hi2";

type Props = {
  description: string;
};

export default function SchedulingCardDescription({ description }: Props) {
  return (
    <div className="group relative">
      <HiMiniInformationCircle className="cursor-pointer text-2xl text-primary" />

      <div className="absolute -top-full right-full hidden w-max rounded-lg border-2 border-primary bg-white p-2 shadow-xl group-hover:block xsm:top-full">
        {description}
      </div>
    </div>
  );
}
