import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Auth = lazy(() => import("auth/routes"));

const router = createBrowserRouter([
  {
    path: "auth/*",
    element: <Auth />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
