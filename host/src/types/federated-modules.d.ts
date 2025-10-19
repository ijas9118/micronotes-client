declare module "auth/routes" {
  const routes: React.ComponentType;
  export default routes;
}

declare module "ui/Button" {
  import { ButtonHTMLAttributes } from "react";

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
  }

  const Button: React.FC<ButtonProps>;
  export default Button;
}
