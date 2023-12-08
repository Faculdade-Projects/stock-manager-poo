/* eslint-disable no-case-declarations */
import {
  //   Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

export interface IProduct {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  price: string | undefined;
  quantity: number | undefined;
  category: number | undefined;
}

interface StockState {
  products: IProduct[];
}

const INITIAL_STATE: StockState = {
  products: [],
};
// Reducer

enum StockContextActions {
  fetchProducts = "FETCH_PRODUCTS",
  createProduct = "CREATE_PRODUCT",
  deleteProduct = "DELETE_PRODUCT",
  updateProduct = "UPDATE_PRODUCT",
}

interface IStockAction {
  type: StockContextActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const StockReducer = (
  state: StockState = INITIAL_STATE,
  action: IStockAction
): StockState => {
  switch (action.type) {
    case StockContextActions.fetchProducts:
      return { ...state, products: action.payload };
    case StockContextActions.createProduct:
      return { ...state, products: [...state.products, action.payload] };
    case StockContextActions.deleteProduct:
      const productIdToRemove = action.payload; // ID do produto a ser removido
      const updatedProducts = state.products.filter(
        (product) => product.id !== productIdToRemove
      );
      return { ...state, products: updatedProducts };
    case StockContextActions.updateProduct:
      const updatedProduct = action.payload; // Produto atualizado
      const updatedProductsList = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      return { ...state, products: updatedProductsList };
    default:
      throw new Error("Ação Invalida");
  }
};

// Context

type StockContextType = {
  stockState: StockState;
  fetchProducts: () => Promise<void>;
  createProduct: (newProduct: IProduct) => void;
  deleteProduct: (id: number) => void;
  updateProduct: (updateProduct: IProduct) => void;
  checkStockStatus: (quantity: number) => string;
  getStatusColor: (status: string, style: CSSModuleClasses) => string;
};

const StockContext = createContext<StockContextType | undefined>(undefined);

// Provider

export const StockProvider = ({ children }: { children: ReactNode }) => {
  const [stockState, stockDispatch] = useReducer(StockReducer, INITIAL_STATE);

  async function fetchProducts() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/product/");

      if (!response.ok) {
        throw new Error("Falha ao buscar os produtos");
      }
      const result = await response.json();
      stockDispatch({
        type: StockContextActions.fetchProducts,
        payload: result,
      });
    } catch (error) {
      console.error("Falha na busca de produtos: ", error);
    }
  }

  function getCSRFCookieValue() {
    const cookieParts = document.cookie.split(";");
    for (let cookie of cookieParts) {
      cookie = cookie.trim();
      if (cookie.startsWith("csrftoken=")) {
        return cookie.split("=")[1];
      }
    }
    return null; // CSRF token não encontrado no cookie
  }
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const csrfToken = getCSRFCookieValue();

  if (csrfToken !== null) {
    headers["X-CSRFToken"] = csrfToken;
  } else {
    console.error("CSRF token não encontrado");
  }

  async function createProduct(newProduct: IProduct) {
    try {
      // Lógica para criar um novo produto no backend
      const response = await fetch("http://127.0.0.1:8000/api/product/", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar o produto");
      }

      alert("Produto criado com sucesso!");
      // Depois de criar o produto no servidor, despachar a ação para adicionar o produto ao contexto
      stockDispatch({
        type: StockContextActions.createProduct,
        payload: newProduct,
      });
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
      alert("Houve um erro ao criar o produto. Por favor, tente novamente.");
    }
  }

  async function deleteProduct(id: number) {
    try {
      // Lógica para remover um produto no backend
      await fetch(`http://127.0.0.1:8000/api/product/${id}/`, {
        method: "DELETE",
        headers: headers,
      });
      await fetchProducts();

      stockDispatch({
        type: StockContextActions.deleteProduct,
        payload: id,
      });
    } catch (error) {
      console.error("Erro ao excluir o produto:", error);
    }
  }

  async function updateProduct(updatedProduct: IProduct) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/product/${updatedProduct.id}/`,
        {
          method: "PUT", // ou 'PATCH' dependendo da API
          headers: headers,
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar o produto");
      }

      const updatedProductData = await response.json();

      // (atualizar o estado local dos produtos com o produto atualizado)
      stockDispatch({
        type: StockContextActions.updateProduct,
        payload: updatedProduct,
      });
      console.log("Produto atualizado:", updatedProductData);
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      alert(
        "Houve um erro ao atualizar o produto. Por favor, tente novamente."
      );
    }
  }
  const checkStockStatus = (quantity: number) => {
    if (quantity > 0 && quantity <= 10) {
      return "Baixo Estoque";
    } else if (quantity === 0) {
      return "Fora de Estoque";
    } else if (quantity < 0) {
      return "Estoque Esgotado";
    } else {
      return "Em Estoque";
    }
  };

  const getStatusColor = (status: string, style: CSSModuleClasses) => {
    switch (status) {
      case "Baixo Estoque":
        return style.lowStock; // Classe CSS para baixo estoque
      case "Fora de Estoque":
        return style.outOfStock; // Classe CSS para fora de estoque
      case "Estoque Esgotado":
        return style.soldOut; // Classe CSS para estoque esgotado
      default:
        return style.inStock; // Classe CSS para estoque disponível
    }
  };

  const values = {
    stockState,
    stockDispatch,
    fetchProducts,
    checkStockStatus,
    getStatusColor,
    createProduct,
    deleteProduct,
    updateProduct,
  };
  return (
    <StockContext.Provider value={values}>{children}</StockContext.Provider>
  );
};

// Hook
export const useStock = (): StockContextType => {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error("useStock deve ser usado dentro de StockProvider");
  }
  return context;
};
