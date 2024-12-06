import { Dispatch, SetStateAction } from "react";

import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import Button from "../Button";
import PageNumber from "./PageNumber";

type Props = {
  pages: number;
  currentPage: number;
  isLoading: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export default function Pagination({
  pages,
  currentPage,
  isLoading,
  setCurrentPage,
}: Props) {
  const pagesArr = Array.from(
    new Array(pages).fill(0, 0, pages),
    (_, i) => i + 1,
  );

  return (
    <div className="m-auto flex w-min items-center justify-between gap-4">
      <Button
        variant="empty"
        disabled={isLoading}
        onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1))}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary"
      >
        <HiMiniChevronLeft className="stroke-1 text-2xl" />
      </Button>

      <div className="flex items-center gap-2">
        {pagesArr.map((page) => (
          <PageNumber
            key={page}
            page={page}
            setCurrentPage={setCurrentPage}
            isCurrentPage={page === currentPage}
          />
        ))}
      </div>

      <Button
        variant="empty"
        disabled={isLoading}
        onClick={() =>
          setCurrentPage((prev) => (prev < pages ? prev + 1 : pages))
        }
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary"
      >
        <HiMiniChevronRight className="stroke-1 text-2xl" />
      </Button>
    </div>
  );
}
