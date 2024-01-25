import { useEffect, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("");

  // const [categorys, setCategorys] = useState({});
  const { stockState, createProduct, fetchCategory } = useStock();

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
    console.log({ ...formData, id: id, category: +selectedCategory });
    createProduct({ ...formData, id: id, category: +selectedCategory });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await fetchCategory();

        // setCategorys({}); // Atualiza o estado 'categorys' com as categorias obtidas
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
                <option key={index} value={categoria.id}>
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
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
}
