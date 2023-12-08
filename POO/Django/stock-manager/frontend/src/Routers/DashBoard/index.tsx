import { useEffect } from "react";
import { useStock } from "../../context/StockContext";
import style from "./style.module.css";
import TableProducts from "../../components/TableProducts";
export default function Dashboard() {
  const { stockState, fetchProducts } = useStock();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="title-page">
      <h1>DashBoard</h1>
      <div className={`separator`}></div>

      <div className={style.cards}>
        <div className={style.card}>
          <h3>Total de Produtos</h3>
          <span>{stockState.products.length}</span>
        </div>
      </div>
      {/* List Products */}
      <div className={style.table}>
        <div className={style.tableHeader}>
          <h2>Estoque</h2>
        </div>
        <TableProducts />
      </div>
    </div>
  );
}
