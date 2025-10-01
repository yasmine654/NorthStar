import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
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
        <img src="../imgHome/menu 1.png"  />
       </div>

      </nav>
    </>
  )
}

export default NavBar;




