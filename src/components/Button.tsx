import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary:
        "bg-primary rounded-lg px-2 py-1.5 text-white hover:bg-blue-500 transition-colors",
      secondary:
        "bg-white rounded-lg px-2 py-1.5 text-primary font-medium transition-colors hover:bg-blue-100",
      empty: "",
    },
    size: {
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonVariants> & { children: ReactNode };

export default function Button({
  variant,
  size,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
}
