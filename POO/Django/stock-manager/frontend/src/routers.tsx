import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./Routers/DashBoard";
import AllProducts from "./Routers/AllProducts";
import CreateProduct from "./Routers/CreateProduct";
import DeleteProductModal from "./Routers/DeleteProduct";
import EditProductModal from "./Routers/EditProduct";

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
      {
        path: "/Create",
        element: <CreateProduct />,
      },
      { path: "/Delete/:id", element: <DeleteProductModal /> },
      { path: "/Edit/:id", element: <EditProductModal /> },
    ],
  },
]);
