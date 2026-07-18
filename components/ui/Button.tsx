import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "rounded-lg px-6 py-3 font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}