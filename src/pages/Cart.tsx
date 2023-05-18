import React, { useContext } from 'react';
import { itemContext } from "../Context"

const Cart = () => {

  const user = useContext(itemContext)
  return (
    <div>Soy el carrito
      {user ? <h1> hola me llamo {user[0].name}</h1>: <h1>no me llamo</h1>}
    </div>
  )
}

export default Cart