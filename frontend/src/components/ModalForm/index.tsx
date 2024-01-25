import { ReactNode } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

type ModalFormProps = {
  handleClose: () => void;
  show: boolean;
  children: ReactNode;
};

export default function ModalForm({
  handleClose,
  show,
  children,
}: ModalFormProps) {
  const navigate = useNavigate();

  const showHideClassName = show ? `${style.onShow}` : `${style.offShow}`;

  const handleModalClose = () => {
    handleClose();
    navigate(-1);
  };

  return (
    <div className={`modal ${showHideClassName}`}>
      <section className={style.modalMain}>
        <button onClick={handleModalClose} className={style.closeModal}>
          Fechar
        </button>
        <div>{children}</div>
      </section>
    </div>
  );
}
