import Start from "./pages/Start";
import { CartContext } from "./context/CartContext.jsx";
import { useContext } from "react";

function App() {
  const first = useContext(CartContext);
  console.log(first);
  return (
    <>
      <Start />
    </>
  );
}

export default App;
