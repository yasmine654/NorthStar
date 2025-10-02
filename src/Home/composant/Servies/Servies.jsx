import './Servies.css'

const Servies = () => {
    const servies = [
    {
      titre: "FREE SHIPPING",
      s1: "Enjoy free shipping on all orders above $100",
      image: "/imgHome/icon.png"
    },
    {
      titre: "SUPPORT 24/7",
      s1: "Our support team is there to help you for queries",
      image: "/imgHome/icon (1).png"
    },
    {
      titre: "30 DAYS RETURN",
      s1: "Simply return it within 30 days for an exchange",
      image: "/imgHome/icon (2).png"
    },
    {
      titre: "100% PAYMENT SECURE",
      s1: "Our payment are secured with 256 bit encryption",
      image: "/imgHome/icon (3).png"
    }
  ];
    

return (
  <div className="Servies">
    <ul>
      {servies.map((ser, index) => (
        <li key={index}>
          <img src={ser.image} className="Servies-img"  />
          <div className="servies-text">
            <h4>{ser.titre}</h4>
            <h5>{ser.s1}</h5>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
}

export default Servies