import React, { useState, createContext, useContext, Children } from "react";

const CartContext = () => {
  const cartGeneralContext = createContext();
  const [items, setItems] = useState("ola");

  const addItem = (item) => {};
  console.log(items);

  return <CartContext.Provider value={items}>{Children}</CartContext.Provider>;
};

export { CartContext };
