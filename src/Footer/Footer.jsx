import './Footer.css'

const Footer = () => {
    const footers = [
    {
      titre: "COMPANY INFO",
      f1: "About Us",
      f2: "Latest Posts",
      f3:'Contact Us',
      f4:'Shop'
    },
    {
      titre: "HELP LINKS",
      f1: "Tracking",
      f2: "Order Status",
      f3:'Delivery',
      f4:'Shipping Info',
      f5: 'FAQ'
    }, 
    {
      titre: "USEFUL LINKS",
      f1: "Special Offers",
      f2: "Gift Cards",
      f3:'Advertising',
      f4:'Terms of Use'
    },
    {
      titre: "GET IN THE KNOW"
    },
  ];

  return (
    <div className="Footer">
        <div className="Footer-top">
            <ul className="Footer-ul">
                {footers.map((foot, index) => (
                    <li key={index}>
                        <h4 className='Footer-title'>{foot.titre}</h4>

                        {index === footers.length - 1 ? (
                            <div className="Footer-special">
                                <input type="email" placeholder="Enter your email" />
                            </div>
                         ) : (
                            <div className="Footer-list">
                                <h4>{foot.f1}</h4>
                                <h4>{foot.f2}</h4>
                                <h4>{foot.f3}</h4>
                                <h4>{foot.f4}</h4>
                                <h4>{foot.f5}</h4>
                            </div>
                         )}
                    </li>
                ))}
            </ul>

        </div>
        <div className="Footer-bottom">
          <div className="F2020">
            <h6>@ 2020 NorthStar eCommerce</h6>
            <pre>Privacy Policy   Terms & Conditions</pre>

          </div>
          <div className="PayPal">
            <ul>
              <img src="/imgHome/Rectangle 13.png" />
              <img src="/imgHome/Rectangle 14.png" />
              <img src="/imgHome/Rectangle 15.png" />
              <img src="/imgHome/Rectangle 16.png" />
            </ul>
          </div>

        </div>

    </div>
  )
}

export default Footer