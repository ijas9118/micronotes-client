import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";

const router = createBrowserRouter([
  { path: "/", element: <ProfilePage /> },
  { path: "/settings", element: <SettingsPage /> },
]);

export const ProfileRoutes = () => <RouterProvider router={router} />;
