import React, { useContext } from "react";
import { useState } from "react";
import Cart from "./pages/Cart";

export const itemContext = React.createContext<object | null>(null);

const Context = () => {
  const [infi, setInfi] = useState<object[] | null>(null);

  console.log(infi)
  const change = () =>
    infi === null ? setInfi([{ name: "jose", edad: 35 }]) : setInfi(null);
  return (
    <itemContext.Provider value={infi}>
      <button onClick={change}>hola</button>
      <Cart />
    </itemContext.Provider>
  );
};

export default Context;
