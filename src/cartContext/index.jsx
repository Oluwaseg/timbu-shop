import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const incrementCartItemCount = () => {
    setCartItemCount(prevCount => prevCount + 1);
    console.log(cartItemCount)
  };

  return (
    <CartContext.Provider value={{ cartItemCount, setCartItemCount, incrementCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
