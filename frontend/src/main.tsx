import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
// import { StockProvider } from "./context/StockContext.tsx";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
