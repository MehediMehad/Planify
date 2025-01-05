import Main from "@/Layout/Main";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/users",
        element: <Users />,
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
