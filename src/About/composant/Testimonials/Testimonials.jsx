import './Testimonials.css'

function Testimonials() {
    const testimonials = [
    {
    },
   {
    },
   {
    }
  ];
  return (
    <div className='Testimonials'>
        <h1>Testimonials</h1>
        <ul>
            {testimonials.map((testi,index) => (
                <li key={index}>
                    <img src="./imgAbout/unsplash_6W4F62sN_yI.png" className='Founders-img'/>
                    <div className="Testimonials-text">
                        <img src="./imgAbout/Page 1.png" className='james-img'/>
                        <p>I got a wrong shirt so i contacted them and they happily offered me a refund. i will surely shop from them again.</p>
                        <h4>James</h4>
                    </div>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Testimonials
