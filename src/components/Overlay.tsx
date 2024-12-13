import { HTMLProps, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

type Props = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
};

export default function Overlay({ className, children }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div
      className={twMerge(
        "absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-secondary/30 p-4 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>,
    document.body,
  );
}
