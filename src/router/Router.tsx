import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from "../pages/Home.tsx";
// import { ErrorRoute } from "../pages/Error.tsx";
import { Layout } from "../components/Misc/Layout.tsx";
import ErrorRoute from "../pages/ErrorRoute.tsx";
import Home from "../pages/Home.tsx";
import Speaker from "../pages/Speaker.tsx";
import Broadcast from "../pages/Broadcast.tsx";
import Register from "../pages/Auths/Register.tsx";
import Testimony from "../pages/Testimony.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/speaker",
        element: <Speaker />,
      },
      {
        path: "/broadcast",
        element: <Broadcast />,
      },
      {
        path: "/testimony",
        element: <Testimony />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
