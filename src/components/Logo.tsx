import { HTMLProps } from "react";
import { cva, VariantProps } from "class-variance-authority";

const logoVariants = cva(
  "w-min rounded-lg px-4 py-1 text-2xl sm:text-3xl font-bold uppercase",
  {
    variants: {
      variant: {
        blue: "bg-primary text-white",
        white: "bg-white text-primary",
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  },
);

type Logo = HTMLProps<HTMLDivElement> & VariantProps<typeof logoVariants>;

export default function Logo({ variant, className }: Logo) {
  return <div className={logoVariants({ variant, className })}>Usv</div>;
}
