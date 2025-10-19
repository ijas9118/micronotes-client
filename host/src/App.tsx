import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";

const Auth = lazy(() => import("auth/routes"));
const Dashboard = lazy(() => import("dashboard/Dashboard"));

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "auth/*",
    element: <Auth />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "notes", element: <div>Notes page</div> },
      { path: "tags", element: <div>Tags page</div> },
      { path: "settings", element: <div>Settings page</div> },
      { path: "profile", element: <div>Profile page</div> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
