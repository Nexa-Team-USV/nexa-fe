import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import Button from "../Button";

type Props = {
  page: number;
  isCurrentPage?: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export default function PageNumber({
  page,
  isCurrentPage = false,
  setCurrentPage,
}: Props) {
  return (
    <Button
      variant="empty"
      onClick={() => setCurrentPage(page)}
      className={twMerge(
        "flex h-10 w-10 items-center justify-center rounded-lg bg-white font-medium text-primary",
        isCurrentPage && "bg-primary text-white",
      )}
    >
      {page}
    </Button>
  );
}
