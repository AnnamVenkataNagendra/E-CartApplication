
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null);
 export const UserCart = ({children}) => {

      const [cartItems, setCartItems] = useState([]);

        const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeCart=(unique )=>{

setCartItems(cartItems.filter((id)=> id.id != unique))

    }
  return (
    <div>
       <CartContext.Provider value={{ cartItems, addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
    </div>
  )
}


export const userCart=()=>{

    return useContext(CartContext);
}