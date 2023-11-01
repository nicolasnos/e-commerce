import React, { createContext, useContext, useState } from "react";

// Paso 1: Crear el contexto
const CartContext = createContext();

// Paso 2: Crear un componente Provider
const CartContextProvider = ({ children }) => {
  const [itemList, setItemList] = useState("0");

  const addItemList = () => {
    setItemList("hola perro");
  };

  return (
    <CartContext.Provider value={{ itemList, addItemList }}>
      {children}
    </CartContext.Provider>
  );
};

// Paso 3: Crear un hook personalizado para acceder al contexto
const useTheme = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
export { CartContext, useTheme };
