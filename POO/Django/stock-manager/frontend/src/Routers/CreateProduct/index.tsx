import { useState } from "react";
import ModalForm from "../../components/ModalForm";
import CreateProductForm from "../../components/CreateProductForm";

export default function CreateProduct() {
  const [showModal, setShowModal] = useState(true);

  return (
    <ModalForm
      show={showModal}
      handleClose={() => {
        setShowModal(false);
      }}
    >
      <h2>Criar Produto</h2>
      <CreateProductForm />
    </ModalForm>
  );
}
