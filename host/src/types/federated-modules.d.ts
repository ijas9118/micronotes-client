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

declare module "sidebar/Sidebar" {
  const Sidebar: React.ComponentType;
  export default Sidebar;
}

declare module "dashboard/Dashboard" {
  const Dashboard: React.ComponentType;
  export default Dashboard;
}

declare module "notes/Notes" {
  const Notes: React.ComponentType;
  export default Notes;
}

declare module "notes/Tags" {
  const Tags: React.ComponentType;
  export default Tags;
}

declare module "notes/Archived" {
  const Archived: React.ComponentType;
  export default Archived;
}
