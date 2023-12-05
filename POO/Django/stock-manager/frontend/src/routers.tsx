import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./Routers/DashBoard";
import AllProducts from "./Routers/AllProducts";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/All",
        element: <AllProducts />,
      },
    ],
  },
]);
