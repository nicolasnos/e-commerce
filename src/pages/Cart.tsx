import { useCart } from "../context/CartContext.jsx";
import ItemCard from "../components/ItemCard.js";

const Cart = () => {
  const { itemList } = useCart();
  return <ItemCard />;
};

export default Cart;
