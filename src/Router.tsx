import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./components";
import { Main } from "./pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);
