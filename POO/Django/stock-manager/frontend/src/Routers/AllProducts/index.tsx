import LinkPage from "../../components/LinkPage";
import TableProducts from "../../components/TableProducts";

import style from "./style.module.css";

export default function AllProducts() {
  return (
    <div className="title-page">
      <h1>Produtos</h1>
      <div className={`separator`}></div>
      <div className={style.nav}>
        <LinkPage toUrl="/Create">+ Adicionar</LinkPage>
      </div>
      {/* List Products */}
      <TableProducts />
    </div>
  );
}
