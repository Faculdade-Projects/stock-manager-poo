import { useNavigate } from "react-router-dom";
import { useStock } from "../../context/StockContext";
import { useEffect, useState } from "react";

import style from "./style.module.css";

export default function EditProduct({ id }: { id: string }) {
  const { stockState, updateProduct, fetchCategory } = useStock();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  const product = stockState.products.find((prod) => prod.id === parseInt(id));

  const [formData, setFormData] = useState({
    id: product?.id,
    name: product?.name,
    description: product?.description,
    price: product?.price,
    quantity: product?.quantity,
    category: product?.category,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log();
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (product) {
      await updateProduct(formData);
      navigate(-1);
    }
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await fetchCategory();

        // setCategorys(categories); // Atualiza o estado 'categorys' com as categorias obtidas
        return categories;
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, [fetchCategory]);

  const handleSelectChange = (event) => {
    // Atualiza o estado da categoria selecionada
    setSelectedCategory(event.target.value);
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
            <select
              id="categorias"
              value={selectedCategory}
              onChange={handleSelectChange}
            >
              <option value="">Selecione...</option>
              {stockState.categorys.map((categoria, index) => (
                <option key={index} value={index}>
                  {categoria.name}
                </option>
              ))}
            </select>
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

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
