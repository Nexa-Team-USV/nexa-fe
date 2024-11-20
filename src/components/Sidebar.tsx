import { Dispatch, SetStateAction, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Button from "./Button";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ isOpen, setIsOpen }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={twMerge(
        "absolute right-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-4 border-l-2 border-primary bg-white transition-transform md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <button
        className="absolute right-5 top-5"
        onClick={() => setIsOpen(false)}
      >
        <HiMiniXMark className="stroke-1 text-2xl text-primary" />
      </button>
      <div className="flex items-center gap-2 rounded-md border-2 border-primary p-2">
        <div className="h-9 w-9 rounded-full bg-primary"></div>
        <div className="font-medium">Tonu Cristian</div>
      </div>
      <Link to="/profile" onClick={() => setIsOpen(false)}>
        Profile
      </Link>
      <Button>Log out</Button>
    </div>
  );
}
