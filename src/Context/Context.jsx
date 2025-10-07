/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function add(product) {
    setCount(prev => prev + 1);
    setCartItems(prev => {
      const existing = prev.find(item => item.title === product.title);
      
      if (existing) {
        return prev.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });  
  }


 function removeItem(title) {
  setCartItems(prev =>
    prev
      .map(item =>
        item.title === title
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );

  setCount(prev => prev - 1);
}

function clearCart() {
  setCartItems([]); // vide complètement le tableau
  setCount(0);      // remet le compteur à 0
}



  
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <Context.Provider value={{ count, add, showCart, toggleCart, cartItems, removeItem, clearCart, total }}>
      {children}
    </Context.Provider>
  );
};


