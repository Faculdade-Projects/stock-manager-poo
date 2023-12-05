import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

export default function NavLinks() {
  const [isActive, setIsActive] = useState<number | null>(0);

  const links = ["DashBoard", "Produtos"];
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to="/"
            className={index === isActive ? style.active : ""}
            onClick={() => setIsActive(index === isActive ? null : index)}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
