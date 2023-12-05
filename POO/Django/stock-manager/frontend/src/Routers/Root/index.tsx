import { Outlet } from "react-router-dom";
import { useStock } from "../../context/StockContext";
import { useEffect } from "react";

import Header from "../../components/Header";

export default function Root() {
  const { stockState, fetchProducts } = useStock();
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {}, [stockState]);
  return (
    <div>
      {/* Header, NavBar, DashBoard, Footer */}
      <Header />
      <Outlet />
    </div>
  );
}
