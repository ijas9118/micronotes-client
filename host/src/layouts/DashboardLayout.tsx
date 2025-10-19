import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

const Sidebar = lazy(() => import("sidebar/Sidebar"));

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Suspense fallback={<div>Loading sidebar...</div>}>
        <Sidebar />
      </Suspense>
      <main className="flex-1 overflow-y-auto p-6">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default DashboardLayout;
