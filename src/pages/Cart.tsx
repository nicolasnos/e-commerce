import { useState } from "react";
import ItemCard from "../components/ItemCard.js";
import Calculator from "../components/Calculator.jsx";
import "../styles/Cart.css";

const Cart = () => {
  const [cuantity, setCuantity] = useState(1);
  return (
    <div className="CartBody">
      <ItemCard cuantity={cuantity} setCuantity={setCuantity} />
      <Calculator cuantity={cuantity} />
    </div>
  );
};

export default Cart;
