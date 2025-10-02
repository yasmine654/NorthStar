import './Founders.css'

function Founders() {
    const founders = [
    {
      image: "./imgAbout/Rectangle 8.png",
      f1: "HM Jawad",
    },
   {
      image: "./imgAbout/Rectangle 8 (1).png",
      f1: "Furqan Abid",
    },
   {
      image: "./imgAbout/Rectangle 8 (2).png",
      f1: "Abdullah Ah",
    },
   {
      image: "./imgAbout/Rectangle 8 (3).png",
      f1: "Abrar Khan",
    }
  ];

  return (
    <div className='Founders'>
        <h1>The Founders</h1>
        <ul>
            {founders.map((found,index) => (
                <li key={index}>
                    <img src={found.image} className='Founders-img'/>
                    <h2>{found.f1}</h2>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Founders
