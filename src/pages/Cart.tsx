import { useTheme } from "../context/CartContext.jsx";

const Cart = () => {
  const { itemList } = useTheme();
  console.log(itemList);
  return <div>Soy el carrito</div>;
};

export default Cart;
