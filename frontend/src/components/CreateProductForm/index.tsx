import { useState } from "react";
import style from "./style.module.css";
import { IProduct, useStock } from "../../context/StockContext";

export default function CreateProductForm() {
  const inital_state: IProduct = {
    id: 0,
    name: "",
    description: "",
    price: "",
    quantity: 0,
    category: 0,
  };

  const [formData, setFormData] = useState(inital_state);
  const { createProduct } = useStock();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log();
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    console.log({ ...formData, id: id });
    createProduct({ ...formData, id: id });
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.areaInputs}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Quantidade:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={(e) => {
                setFormData({ ...formData, quantity: +e.target.value });
              }}
              required
            />
          </label>
          <label>
            Categoria:
            <input
              type="number"
              name="category"
              value={formData.category}
              onChange={(e) => {
                setFormData({ ...formData, category: +e.target.value });
              }}
              required
            />
          </label>
        </div>
        <div className={style.largeInput}>
          <label>
            Descrição:
            <textarea
              id=""
              name="description"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
              required
            ></textarea>
          </label>
        </div>
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
}
