import './Discover.css'
import { useEffect, useState, useContext} from "react";
import { Context } from "../../../Context/Context.jsx";


const Discover = () => {

  const [products, setProducts] = useState([]);

  const { add } = useContext(Context);

   useEffect(() => {
    if (window.location.hash === "#discover") {
      const element = document.getElementById("discover");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => console.log("Erreur de chargement"))
  }, []);

  

  return (
    <div  className="Discover">
        
      <div className="Discover-Title">
        <h1>Discover NEW Arrivals</h1>
        <h3>Recently added shirts!</h3>
      </div>
      

      <div id='discover' className="Discover-Display">
        <ul className="Discover-Ul">
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} className="Discover-Ul-Img" alt={product.title}/>
              <div className="Discover-Ul-Text">
                <h4>{product.title}</h4>
                <div className="achat">
                  <p>${product.price}</p>
                  <img onClick={add} src="/imgHome/shopping-bag 1.png" className='achat-click'/>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Discover;
