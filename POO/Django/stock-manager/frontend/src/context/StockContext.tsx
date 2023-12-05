import {
  //   Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  category: number;
}

interface StockState {
  products: Product[];
}

const INITIAL_STATE: StockState = {
  products: [],
};
// Reducer

enum StockContextActions {
  fetchProducts = "FETCH_PRODUCTS",
}

interface IStockAction {
  type: StockContextActions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const StockReducer = (state: StockState, action: IStockAction): StockState => {
  switch (action.type) {
    case StockContextActions.fetchProducts:
      return { ...state, products: action.payload };

    default:
      throw new Error("Ação Invalida");
  }
};

// Context

type StockContextType = {
  stockState: StockState;

  fetchProducts: () => Promise<void>;
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

  const values = {
    stockState,
    stockDispatch,
    fetchProducts,
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
