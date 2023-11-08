import { Link } from "react-router-dom";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useCart } from "../context/CartContext";

const Calculator = () => {
  const { itemList } = useCart();
  const initialValue = 0;

  const totalItemsValues = itemList.map((item) => {
    return item.price;
  });

  console.log(totalItemsValues);

  const totalValue = totalItemsValues.reduce(
    (prev, curr) => prev + curr,
    initialValue
  );
  return (
    <>
      {itemList.length > 0 ? (
        totalValue
      ) : (
        <Badge
          bg="transparent"
          style={{ height: "2rem", fontSize: "1rem" }}
          text="dark"
          as={Link}
          to={"/"}
        >
          Ve a comprar algo <BsFillCartPlusFill />
        </Badge>
      )}
    </>
  );
};

export default Calculator;
