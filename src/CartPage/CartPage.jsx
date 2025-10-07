import "./CartPage.css";
import { useContext, useEffect } from "react";
import { Context } from "../Context/Context.jsx";

const CartPage = () => {
  const { showCart, toggleCart, cartItems, removeItem, clearCart, total } = useContext(Context);

  // ✅ Bloquer le scroll de la page quand le panier est ouvert
  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCart]);

  if (!showCart) return null;

  return (
    <div className="Cart-parent">
      <div className="CartePage">

        <div className="Cart-fermer-pannier">
         <h2>🛒 Mon Panier</h2>
         <button className="close-btn" onClick={toggleCart}>✖</button>
        </div>

        <div className="Cart-tableau">
          <h4></h4>
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>

        <ul className="Cart-list">
          {cartItems.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            cartItems.map((item, index) => (
              <li key={index}>

                  <button onClick={() => removeItem(item.title)}>✖</button>
                  <span >{item.title}</span>
                  <span style={{color: '#024E82'}}>${item.price}</span>
                  <span className="Cart-quantity" >{item.quantity}</span>
                  <span style={{color: '#024E82'}}>${(item.price * item.quantity).toFixed(2)}</span>
                  
              </li>
            ))
          )}
        </ul>

        <div className="Cart-total-vider">
          <h3>Total Panier :<span> ${total.toFixed(2)} </span></h3>
          <button onClick={clearCart}>Vider le panier 🗑</button>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
