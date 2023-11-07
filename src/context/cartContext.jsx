import React, { createContext, useContext, useEffect, useState } from "react";

// Paso 1: Crear el contexto
const CartContext = createContext();

// Paso 2: Crear un componente Provider
const CartContextProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    console.log(itemList);
  }, [itemList]);

  const addItemList = (item) => {
    setItemList([...itemList, item]);
  };

  const deleteItemList = (item) => {
    const index = itemList.indexOf(item);

    if (index !== -1) {
      const newItemList = [...itemList];
      newItemList.splice(index, 1);
      setItemList(newItemList);
    } else {
      alert(`no se encontro a ${item}`);
    }
  };

  return (
    <CartContext.Provider value={{ itemList, addItemList, deleteItemList }}>
      {children}
    </CartContext.Provider>
  );
};

// Paso 3: Crear un hook personalizado para acceder al contexto
const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
export { CartContext, useCart };
