import StatCard from "./StatCard";
import { Archive, NotebookPen, Tags } from "lucide-react";
import "../index.css";

const DashboardGrid = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-amber-600">Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard label="Total Notes" value={128} icon={<NotebookPen />} />
        <StatCard label="Archived Notes" value={24} icon={<Archive />} />
        <StatCard label="Tags Created" value={9} icon={<Tags />} />
      </div>

      {/* <DashboardChart /> */}
    </div>
  );
};

export default DashboardGrid;
