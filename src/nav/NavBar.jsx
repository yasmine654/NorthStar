import './NavBar.css'
import { Link } from "react-router-dom";
import { Context } from "../Context/Context.jsx";
import { useContext } from 'react';

const NavBar = () => {
  const { count, toggleCart } = useContext(Context);
  return (
    <>
      <nav className="nav">

        <div className="logo">
        <img src="../imgHome/@Rendelle.png" />
        </div>

       <ul className="menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
       </ul>

       <div className="icons">
        <img src="../imgHome/user 1.png" />
        <div onClick={toggleCart} className="cart">
          <div  className="num">{count}</div>
        </div>
        <img  src="../imgHome/menu 1.png"/>
       </div>

      </nav>
    </>
  )
}

export default NavBar;




