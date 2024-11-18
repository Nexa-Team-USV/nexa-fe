import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { useFormContext } from "react-hook-form";

const inputVariants = cva("outline-none", {
  variants: {
    variant: {
      primary:
        "border-primary border-2 py-1 px-2 rounded-lg placeholder:text-sm disabled:bg-secondary-disabled",
    },
    size: {
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "full",
  },
});

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  VariantProps<typeof inputVariants> & {
    name: string;
  };

export default function Input({
  variant,
  size,
  className,
  name,
  ...props
}: Props) {
  const { register } = useFormContext();

  return (
    <input
      {...props}
      {...register(name)}
      className={twMerge(inputVariants({ variant, size, className }))}
    />
  );
}
