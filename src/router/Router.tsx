import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import { About } from "../pages/About.tsx";
import { ErrorRoute } from "../pages/Error.tsx";
import { Layout } from "../components/Misc/Layout.tsx";
import Register from "../pages/Auths/Register.tsx";
import Testimony from "../pages/Testimony.tsx";
import Faq from  "../pages/Info/Faq.tsx"

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/testimonies",
        element: <Testimony />,
      },
      {
        path: "/auth/",
        element: <Register />,
      },
      {
        path: "/info/faq",
        element: <Faq />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
