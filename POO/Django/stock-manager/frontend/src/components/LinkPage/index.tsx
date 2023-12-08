import { Link } from "react-router-dom";
import style from "./style.module.css";
import { ReactNode } from "react";

type typeBtn = "btnAdd" | "btnEdit" | "btnDelete";

type LinkPageProps = {
  children: ReactNode;
  toUrl: string;
  typeBtn?: typeBtn;
};

export default function LinkPage({ children, toUrl, typeBtn }: LinkPageProps) {
  switch (typeBtn) {
    case "btnAdd":
      return (
        <Link to={toUrl} className={`${style.btn}`}>
          {children}
        </Link>
      );
    case "btnEdit":
      return (
        <Link to={toUrl} className={`${style.btn} ${style.btnEdit}`}>
          {children}
        </Link>
      );
    case "btnDelete":
      return (
        <Link to={toUrl} className={`${style.btn} ${style.btnDelete}`}>
          {children}
        </Link>
      );
    default:
      return (
        <Link to={toUrl} className={`${style.btn}`}>
          {children}
        </Link>
      );
  }
}
