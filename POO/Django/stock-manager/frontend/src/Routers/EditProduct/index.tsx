import { useState } from "react";
import ModalForm from "../../components/ModalForm";
import { useParams } from "react-router-dom";
import EditProduct from "../../components/EditProduct";

export default function EditProductModal() {
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
      <EditProduct id={!id ? "0" : id} />
    </ModalForm>
  );
}
