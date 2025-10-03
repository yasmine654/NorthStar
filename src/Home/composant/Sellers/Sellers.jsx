import './Sellers.css'
import { useEffect, useState } from "react";

function Sellers() {
     const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=4")
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(() => console.log("Erreur de chargement"))
      }, []);
    
  return (
    <div className="Sellers">
        <div className="Sellers-Title">
            <h1>Top Sellers</h1>
            <h4>Browse our top-selling products</h4>
        </div>
        <div className="Sellers-Display">
             <ul className="Sellers-Ul">
              {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} className="Sellers-Ul-Img" alt={product.title}/>
              <div className="Sellers-Ul-Text">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
        <a href="#discover">
          <button >SHOP NOW</button>
        </a>
    </div>
  )
}

export default Sellers