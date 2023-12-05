import { StockProvider } from "./context/StockContext";
import Root from "./Routers/Root";

function App() {
  return (
    <>
      <StockProvider>
        <Root />
      </StockProvider>
    </>
  );
}

export default App;
