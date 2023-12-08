import style from "./style.module.css";
import NavLinks from "../NavLinks";

export default function Header() {
  return (
    <header className={style.header}>
      <div className="logo">
        <h2>
          POO <span>Stock</span>
        </h2>
      </div>
      <nav>
        <NavLinks></NavLinks>
      </nav>
    </header>
  );
}
