import SHeader from "../components/SHeader";
import { CartProvider } from "../context/CartContext";

const Start = () => {
  return (
    <CartProvider>
      <SHeader />
    </CartProvider>
  );
};

export default Start;
