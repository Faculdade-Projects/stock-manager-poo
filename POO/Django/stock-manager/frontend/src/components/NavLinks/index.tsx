import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

export default function NavLinks() {
  const [isActive, setIsActive] = useState<number | null>(0);

  const links = [
    { name: "DashBoard", url: "/" },
    { name: "Produtos", url: "/All" },
  ];
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={`${link.url}`}
            className={`${index === isActive ? style.active : ""} ${
              style.link
            }`}
            onClick={() => setIsActive(index === isActive ? null : index)}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
