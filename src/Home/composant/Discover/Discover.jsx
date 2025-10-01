import './Discover.css'
import { useEffect, useState } from "react";

const Discover = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => console.log("Erreur de chargement"))
  }, []);

  return (
    <div className="Discover">
        
      <div className="Discover-Title">
        <h1>Discover NEW Arrivals</h1>
        <h3>Recently added shirts!</h3>
      </div>

      <div className="Discover-Display">
        <ul className="Discover-Ul">
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} className="Discover-Ul-Img" alt={product.title}/>
              <div className="Discover-Ul-Text">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Discover;
