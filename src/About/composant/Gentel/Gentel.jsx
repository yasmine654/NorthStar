import './Gentel.css'
import { Link } from "react-router-dom";

function Gentel() {
    const gentels = [
        {},
        {}
    ];
  return (
    <div className="Gentel">
        <ul className="Gentel-Ul">
            {gentels.map((index) => (
                <li key={index}>
                   <Link to="/#discover">
                     <button>BUY NOW</button>
                   </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Gentel

