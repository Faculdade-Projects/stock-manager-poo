import { useState } from "react";
import ModalForm from "../../components/ModalForm";
import DeleteProduct from "../../components/DeleteProduct";
import { useParams } from "react-router-dom";

export default function DeleteProductModal() {
  const [showModal, setShowModal] = useState(true);
  const { id } = useParams();

  return (
    <ModalForm
      show={showModal}
      handleClose={() => {
        setShowModal(false);
      }}
    >
      <h2>Deletar</h2>
      <DeleteProduct id={!id ? "0" : id} />
    </ModalForm>
  );
}
