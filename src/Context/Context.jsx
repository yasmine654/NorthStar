/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  function add() {
    setCount(prev => prev + 1);
}
  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <Context.Provider value={{ count, add, showCart, toggleCart  }}>
      {children}
    </Context.Provider>
  );
};