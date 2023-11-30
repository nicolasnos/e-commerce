import { createContext, useContext, useState } from "react";

export interface CartItem {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
}

type ComponentProp = {
  children: string | JSX.Element | JSX.Element[];
};

// Paso 1: Crear el contexto

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: ComponentProp) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
