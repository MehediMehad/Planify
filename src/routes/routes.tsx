import Main from "@/Layout/Main";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: "/about",
        element: <h1>abut page</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>login page</h1>,
  },
]);

export default routes;
