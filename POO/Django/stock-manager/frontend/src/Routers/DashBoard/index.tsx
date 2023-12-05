import { useEffect } from "react";
import { useStock } from "../../context/StockContext";
import style from "./style.module.css";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const { stockState, fetchProducts } = useStock();

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  return (
    <div className={style.dashboard}>
      <h1>DashBoard</h1>
      <div className={style.separator}></div>
      <div className={style.cards}>
        <div className={style.card}>
          <h3>Total de Produtos</h3>
          <span>10</span>
        </div>
      </div>
      {/* List Products */}
      <div className={style.table}>
        <div className={style.tableHeader}>
          <h2>Estoque</h2>
        </div>
        <div className={style.tableBody}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Status</th>
                <th>Quantidade</th>
                <th className={style.thHidden}>Açoes</th>
              </tr>
            </thead>
            <tbody>
              {stockState.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>Em Estoque</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link to="/" className={`${style.btn} ${style.btnEdit}`}>
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
