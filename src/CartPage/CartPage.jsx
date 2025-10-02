import './CartPage.css'
import { useContext } from "react";
import { Context } from "../Context/Context.jsx";

const CartPage = () => {
    const { showCart, toggleCart, count } = useContext(Context);
     if (!showCart) return null; 
  return (
    <div className="CartePage">
    <div>CartPage</div>
    <p>Articles : {count}</p>
    <button onClick={toggleCart}>Fermer</button>

   </div>
  )
}

export default CartPage