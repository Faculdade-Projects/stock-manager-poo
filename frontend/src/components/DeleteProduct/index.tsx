import { useNavigate } from "react-router-dom";
import { useStock } from "../../context/StockContext";

import style from "./style.module.css";

export default function DeleteProduct({ id }: { id: string }) {
  const { stockState, deleteProduct } = useStock();
  const navigate = useNavigate();
  const product = stockState.products.find((prod) => prod.id === parseInt(id));

  async function handleDelete() {
    await deleteProduct(+id);
    navigate(-1);
  }
  return (
    <div className={style.wrapper}>
      <p>
        Deseja Excluir o Produto: <strong>{product?.name}</strong>
      </p>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
}
