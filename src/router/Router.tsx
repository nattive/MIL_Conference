import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import { About } from "../pages/About.tsx";
import { ErrorRoute } from "../pages/Error.tsx";
import { Layout } from "../components/Misc/Layout.tsx";
import Register from "../pages/Auths/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,

    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
