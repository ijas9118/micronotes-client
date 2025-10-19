declare module "ui/Button" {
  import { ButtonHTMLAttributes } from "react";

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
  }

  const Button: React.FC<ButtonProps>;
  export default Button;
}

declare module "ui/Input" {
  import { InputHTMLAttributes } from "react";

  export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
  }

  const Input: React.FC<InputProps>;
  export default Input;
}
