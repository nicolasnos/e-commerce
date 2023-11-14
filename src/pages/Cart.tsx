import { useState } from "react";
import ItemCard from "../components/ItemCard.js";
import Calculator from "../components/Calculator.jsx";

const Cart = () => {
  const [cuantity, setCuantity] = useState(1);
  return (
    <>
      <ItemCard cuantity={cuantity} setCuantity={setCuantity} />
      <Calculator cuantity={cuantity} />
    </>
  );
};

export default Cart;
