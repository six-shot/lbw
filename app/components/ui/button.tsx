import Link from "next/link";
import * as React from "react";


interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "href"
> {
  variant?:
    | "default"
    | "secondary"
    | "tertiary"
    | "outline"
    | "ghost"
    | "destructive"
    | "black";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", href, ...props }, ref) => {
    const baseStyles =
      " flex-shrink-0 cursor-pointer text-nowrap leading-[26px] inline-flex items-center pt-[1px] justify-center gap-2.5  font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed [&>svg]:shrink-0";

    const variants = {
      default: "bg-tertiary border border-accent text-forest ",
      secondary: "bg-surface border border-accent text-forest ",
      tertiary: "bg-[#095143] text-white",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      black: "bg-[#000000] text-white hover:bg-[#000000]/90",
    };

    const sizes = {
      sm: "h-9 px-[15px] text-base rounded-[5px]",
      md: "h-[46px] px-[15px] text-base font-medium rounded-[10px]",
      lg: "h-[64px] px-10 text-base rounded-[8px] font-medium",
      xl: "h-[72px] px-10 text-base rounded-[8px] font-medium",
      icon: "p-0",
    };

    // Check if button has flex-1 class to apply it to Link wrapper as well
    const hasFlex1 = className?.includes("flex-1");

    // If href is provided and button has flex-1, remove flex-1 from button and add w-full
    // The Link wrapper will have flex-1 instead
    let buttonClassName = className || "";
    if (href && hasFlex1) {
      // Remove flex-1 and any extra spaces, then add w-full
      buttonClassName = buttonClassName.replace(/\bflex-1\b/g, "").trim();
      buttonClassName = buttonClassName
        ? `${buttonClassName} w-full`
        : "w-full";
    }

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${buttonClassName}`;
    // Add min-w-0 to prevent Link from growing beyond flex-1 allocation
    const linkClassName = hasFlex1 ? "flex-1 flex min-w-0" : "inline-flex";

    // If href is provided, wrap button in Link
    if (href) {
      return (
        <Link href={href} className={linkClassName}>
          <button ref={ref} className={buttonClasses} {...props} />
        </Link>
      );
    }

    // Otherwise, render as regular button
    return <button ref={ref} className={buttonClasses} {...props} />;
  },
);
Button.displayName = "Button";

export { Button };
