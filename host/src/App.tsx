import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";

const Auth = lazy(() => import("auth/routes"));
const Dashboard = lazy(() => import("dashboard/Dashboard"));
const Notes = lazy(() => import("notes/Notes"));
const Tags = lazy(() => import("notes/Tags"));
const Archived = lazy(() => import("notes/Archived"));

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
      { path: "notes", element: <Notes /> },
      { path: "tags", element: <Tags /> },
      { path: "archived", element: <Archived /> },
      { path: "settings", element: <div>Settings page</div> },
      { path: "profile", element: <div>Profile page</div> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
