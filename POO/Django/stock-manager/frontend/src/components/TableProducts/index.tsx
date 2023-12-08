import style from "./style.module.css";
import { useStock } from "../../context/StockContext";
import LinkPage from "../LinkPage";

export default function TableProducts() {
  const { stockState, getStatusColor, checkStockStatus } = useStock();
  return (
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
              <td>
                <span
                  className={`${getStatusColor(
                    checkStockStatus(product.quantity),
                    style
                  )} ${style.status}`}
                >
                  {checkStockStatus(product.quantity)}
                </span>
              </td>
              <td>{product.quantity}</td>
              <td className={style.grupAction}>
                <LinkPage toUrl={`/Delete/${product.id}`} typeBtn="btnDelete">
                  Excluir
                </LinkPage>
                <LinkPage typeBtn="btnEdit" toUrl={`/Edit/${product.id}`}>
                  Editar
                </LinkPage>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
