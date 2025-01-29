import React, { createContext, useState } from "react";

export const AddCartContext = createContext();

export const AddCartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <AddCartContext.Provider value={{ cartCount, addCartCount }}>
      {children}
    </AddCartContext.Provider>
  );
};
