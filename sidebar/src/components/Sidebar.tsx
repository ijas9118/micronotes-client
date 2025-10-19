import {
  LayoutDashboard,
  NotebookPen,
  Settings,
  Tags,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import "../index.css";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  { to: "/notes", label: "Notes", icon: <NotebookPen /> },
  { to: "/tags", label: "Tags", icon: <Tags /> },
  { to: "/settings", label: "Settings", icon: <Settings /> },
  { to: "/profile", label: "Profile", icon: <User /> },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-amber-50  h-screen flex flex-col border-r border-amber-300">
      <div className="text-2xl font-bold p-6 border-b border-amber-300 text-amber-800">
        MicroNotes
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-neutral-500 text-neutral-50 font-semibold"
                  : "hover:bg-amber-100"
              }`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 text-sm text-center border-t border-amber-300">
        © {new Date().getFullYear()} MicroNotes
      </div>
    </aside>
  );
};

export default Sidebar;
