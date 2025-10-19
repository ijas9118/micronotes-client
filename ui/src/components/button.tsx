import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "../index.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}
const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  let variantClass = "";

  switch (variant) {
    case "secondary":
      variantClass = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "outline":
      variantClass = "border border-amber-500 text-amber-500 hover:bg-amber-50";
      break;
    case "primary":
    default:
      variantClass = "bg-amber-500 text-white hover:bg-amber-600";
  }

  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500",
        variantClass,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
