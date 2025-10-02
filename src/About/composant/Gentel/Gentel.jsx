import './Gentel.css'

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
                    <button>BUY NOW</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Gentel

