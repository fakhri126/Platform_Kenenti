import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-heading font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-kenenti-yellow text-kenenti-navy shadow-sm hover:bg-[#f2aa40]",
        navy:
          "bg-kenenti-navy text-white shadow-sm hover:bg-[#13254a]",
        destructive:
          "bg-kenenti-red text-white shadow-sm hover:bg-[#e0463e]",
        outline:
          "border-2 border-kenenti-navy bg-transparent text-kenenti-navy hover:bg-kenenti-navy hover:text-white",
        outlineLight:
          "border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-kenenti-navy",
        secondary:
          "bg-kenenti-sand text-kenenti-navy hover:bg-[#dcd4ca]",
        ghost:
          "text-kenenti-navy hover:bg-kenenti-sand/60",
        link: "text-kenenti-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] px-5 py-2.5",
        sm: "min-h-[40px] rounded-md px-3.5 text-xs",
        lg: "min-h-[48px] rounded-lg px-7 py-3 text-base",
        icon: "min-h-[44px] min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
