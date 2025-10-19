import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const Auth = lazy(() => import("auth/routes"));

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "auth/*",
    element: <Auth />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
